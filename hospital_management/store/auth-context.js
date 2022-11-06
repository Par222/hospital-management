import { useRouter } from "next/router";
import React, { useReducer, useEffect, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  userType: null,
  isTokenExpired: false,
  onSetUserType: (userType) => {},
  onLogin: (token, tokenExpirationTime) => {},
  onLogout: () => {},
});

const defaultAuthState = {
  token: "",
  isTokenExpired: false,
  userType: null,
};

function authReducer(state, action) {
  if (action.type === "USER_LOGIN") {
    return {
      token: action.value,
      userType: state.userType,
      isTokenExpired: false,
    };
  }
  if (action.type === "USER_LOGOUT") {
    return defaultAuthState;
  }
  if (action.type === "USER_TYPE") {
    return {
      token: state.token,
      userType: action.value,
      isTokenExpired: false,
    };
  }
  if (action.type === "USER_RELOAD") {
    return {
      token: action.value.token,
      userType: action.value.userType,
      isTokenExpired: false,
    };
  }
  if (action.type === "TOKEN_EXPIRY") {
    return {
      token: "",
      userType: null,
      isTokenExpired: true,
    };
  }
  return defaultAuthState;
}

function findRemainingTokenTime(expirationTime) {
  const currentTime = new Date().getTime();
  const adjustedExpirationTime = new Date(expirationTime).getTime();
  console.log(currentTime, expirationTime);
  const remainingTime = adjustedExpirationTime - currentTime;
  return remainingTime;
}

let logoutTimer;

export function AuthContextProvider(props) {
  const [authState, authDispatchFunction] = useReducer(
    authReducer,
    defaultAuthState
  );
  const isLoggedIn = !!authState.token;
  const Router = useRouter();

  const loginHandler = (token, refreshToken, tokenExpirationTime) => {
    authDispatchFunction({ type: "USER_LOGIN", value: token });
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("tokenExpirationTime", tokenExpirationTime);
    localStorage.setItem("eventType", "Login");
    console.log(token, tokenExpirationTime, "login");
    const remainingTokenTime = findRemainingTokenTime(tokenExpirationTime);
    logoutTimer = setTimeout(tokenExpiryHandler, remainingTokenTime);
  };

  const logoutHandler = useCallback(() => {
    console.log("from logout");
    authDispatchFunction({ type: "USER_LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("tokenExpirationTime");
    localStorage.removeItem("eventType");
    logoutTimer && clearTimeout(logoutTimer);
    Router.push("/login");
  }, [Router]);

  const userTypeHandler = (userType) => {
    authDispatchFunction({ type: "USER_TYPE", value: userType });
    localStorage.setItem("userType", userType);
  };

  const userReloadHandler = useCallback((token, userType, tokenExpirationTime) => {
    localStorage.setItem("token", token);
    localStorage.setItem("tokenExpirationTime", tokenExpirationTime);
    authDispatchFunction({
      type: "USER_RELOAD",
      value: { token: token, userType: userType },
    });
    console.log("reload");
  }, []);

  const tokenExpiryHandler = useCallback(() => {
    authDispatchFunction({ type: "TOKEN_EXPIRY" });
    console.log("expired");
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("tokenExpirationTime");
    localStorage.removeItem("eventType");
    logoutTimer && clearTimeout(logoutTimer);
    Router.push("/login");
    toast.error("Session Timed Out !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }, [Router]);

  const getRefreshedToken = useCallback(async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    let API_KEY = "AIzaSyCqx5Fmv21exf5UNsEriBwFlfBA7maM3K4";
    try {
      const result = await fetch(
        `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
        {
          method: "POST",
          body: "grant_type=refresh_token&refresh_token=" + refreshToken,

          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (result.ok) {
        const data = await result.json();
        const newToken = data.id_token;
        const remainingTokenTime = findRemainingTokenTime(
          new Date(
            new Date().getTime() + parseInt(data.expires_in) * 1000
          ).getTime()
        );
        const userType = localStorage.getItem("userType");
        userReloadHandler(newToken, userType, remainingTokenTime);
        logoutTimer = setTimeout(tokenExpiryHandler, remainingTokenTime);
      }
    } catch (err) {
      console.log(err);
    }
  }, [tokenExpiryHandler, userReloadHandler]);

  const authCtx = {
    token: authState.token,
    isLoggedIn: isLoggedIn,
    userType: authState.userType,
    isTokenExpired: false,
    onSetUserType: userTypeHandler,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };

  useEffect(() => {
    const eventType = localStorage.getItem("eventType");
    if (eventType === "Login") {
      localStorage.setItem("eventType", "Reload");
      // const expirationTime = parseInt(localStorage.getItem("tokenExpirationTime"));
      // const remainingTokenTime = findRemainingTokenTime(expirationTime);
      // if(remainingTokenTime <= 0){
      //     // logoutHandler();
      //     tokenExpiryHandler();
      // }
      // else{
      //     const userType = localStorage.getItem("userType")
      //     userReloadHandler(tokenOnReload, userType);
      //     logoutTimer = setTimeout(tokenExpiryHandler, remainingTokenTime);
      // }
    } else if (eventType === "Reload") {
      console.log("hey");
      getRefreshedToken();
    }
  }, [getRefreshedToken]);

  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
      {authState.isTokenExpired && <ToastContainer />}
    </AuthContext.Provider>
  );
}

export default AuthContext;
