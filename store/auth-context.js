import { useRouter } from "next/router";
import React, {useReducer, useEffect, useCallback} from "react";
import { toast, ToastContainer } from "react-toastify";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    userType: null,
    isTokenExpired: false,
    onSetUserType: (userType) =>{},
    onLogin: (token, tokenExpirationTime) =>{},
    onLogout: () =>{}
})

const defaultAuthState = {
    token: "",
    isTokenExpired: false,
    userType: null
}

function authReducer(state, action){
    if(action.type === "USER_LOGIN"){
        return{
            token: action.value,
            userType: state.userType,
            isTokenExpired: false
        }
    }
    if(action.type === "USER_LOGOUT"){
        return defaultAuthState;
    }
    if(action.type === "USER_TYPE"){
        return{
            token: state.token,
            userType: action.value,
            isTokenExpired: false
        }
    }
    if(action.type === "USER_RELOAD"){
        return{
            token: action.value.token,
            userType: action.value.userType,
            isTokenExpired: false
        }
    }
    if(action.type === "TOKEN_EXPIRY"){
        return{
            token: "",
            userType: null,
            isTokenExpired: true
        }
    }
    return defaultAuthState;
}

function findRemainingTokenTime(expirationTime){
    const currentTime = new Date().getTime();
    const adjustedExpirationTime = new Date(expirationTime).getTime();
    console.log(currentTime, expirationTime)
    const remainingTime = adjustedExpirationTime - currentTime;
    return remainingTime;
}

let logoutTimer;

export function AuthContextProvider(props){
   
    const [authState, authDispatchFunction] = useReducer(authReducer, defaultAuthState);
    const isLoggedIn = !!authState.token;
    const Router = useRouter();

    const loginHandler = (token, tokenExpirationTime) =>{
        authDispatchFunction({type: "USER_LOGIN", value: token});
        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpirationTime", tokenExpirationTime)
        console.log(token, tokenExpirationTime, "login")
        const remainingTokenTime = findRemainingTokenTime((tokenExpirationTime));
        logoutTimer = setTimeout(tokenExpiryHandler, remainingTokenTime);
    }

    const logoutHandler = useCallback(() =>{
        console.log("from logout")
        authDispatchFunction({type: "USER_LOGOUT"});
        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        localStorage.removeItem("tokenExpirationTime");
        logoutTimer && clearTimeout(logoutTimer);
        Router.push("/login");
    }, [Router])

    const userTypeHandler = (userType) =>{
        authDispatchFunction({type: "USER_TYPE", value: userType});
        localStorage.setItem("userType", userType);
    }

    const userReloadHandler = useCallback((token, userType) =>{
        authDispatchFunction({type: "USER_RELOAD", value: {token: token, userType: userType}});
        console.log("reload")
    },[])

    

    const tokenExpiryHandler = useCallback(() =>{
        authDispatchFunction({type: "TOKEN_EXPIRY"});
        console.log("expired")
        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        localStorage.removeItem("tokenExpirationTime");    
        logoutTimer && clearTimeout(logoutTimer);
        Router.push("/login")
        toast.error("Session Timed Out !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
    },[Router])

    const authCtx = {
        token: authState.token,
        isLoggedIn: isLoggedIn,
        userType: authState.userType,
        isTokenExpired: false,
        onSetUserType: userTypeHandler,
        onLogin: loginHandler,
        onLogout: logoutHandler
    }

    useEffect(() =>{
        const tokenOnReload = localStorage.getItem("token");
        console.log("Oops")
        console.log(tokenOnReload)
        if(tokenOnReload){
            const expirationTime = parseInt(localStorage.getItem("tokenExpirationTime"));
            const remainingTokenTime = findRemainingTokenTime(expirationTime);
            if(remainingTokenTime <= 0){
                console.log("from useEffect")
                // logoutHandler();
                tokenExpiryHandler();
            }
            else{
                console.log("from useEffect 2")
                const userType = localStorage.getItem("userType")
                userReloadHandler(tokenOnReload, userType);
                logoutTimer = setTimeout(tokenExpiryHandler, remainingTokenTime);
            }     
        }
    }, [userReloadHandler, logoutHandler, tokenExpiryHandler])

    return(
        <AuthContext.Provider value = {authCtx}>
            {props.children}
            {authState.isTokenExpired && <ToastContainer />}
        </AuthContext.Provider>
    )
}

export default AuthContext;