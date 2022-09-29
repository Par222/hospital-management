import Sidebar from "./common/Sidebar/Sidebar";
import React from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

function Layout(props){
    const authCtx =  useContext(AuthContext);
    return(
            <div className = "flex min-h-screen ">
                {/* <Sidebar /> */}
                {props.children}
            </div>
    )
}

export default Layout;