import React, {useReducer, useEffect, useCallback} from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    userType: null,
    isTokenExpired: false,
    onSetUserType: (userType) =>{},
    onLogin: (token) =>{},
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
            userType: state.userType
        }
    }
    if(action.type === "USER_LOGOUT"){
        return defaultAuthState;
    }
    if(action.type === "USER_TYPE"){
        return{
            token: state.token,
            iuserType: action.value
        }
    }
    if(action.type === "USER_RELOAD"){
        return{
            token: action.value.token,
            userType: action.value.userType
        }
    }
    return defaultAuthState;
}

export function AuthContextProvider(props){
    // useEffect(() =>{
    //     const tokenOnReload = localStorage.getItem("token");
    //     if(token){
    //         const userType = localStorage.getItem("")
    //         userReloadHandler(tokenOnReload);
    //     }
    // }, [userReloadHandler])
    
    const [authState, authDispatchFunction] = useReducer(authReducer, defaultAuthState);
    const isLoggedIn = !!authState.token;

    const loginHandler = (token) =>{
        authDispatchFunction({type: "USER_LOGIN", value: token});
        localStorage.setItem("token", token);
    }

    const logoutHandler = () =>{
        authDispatchFunction({type: "USER_LOGOUT"});
        localStorage.removeItem("token");
    }

    const userTypeHandler = (userType) =>{
        authDispatchFunction({type: "USER_TYPE", value: userType});
    }

    const userReloadHandler = useCallback((token, userType) =>{
        authDispatchFunction({type: "USER_RELOAD", value: {token: token, userType: userType}});
    },[])

    const authCtx = {
        token: authState.token,
        isLoggedIn: isLoggedIn,
        userType: authState.userType,
        isTokenExpired: false,
        onSetUserType: userTypeHandler,
        onLogin: loginHandler,
        onLogout: logoutHandler
    }

    return(
        <AuthContext.Provider value = {authCtx}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;