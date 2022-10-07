import Sidebar from "./common/Sidebar/Sidebar";
import React from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

function Layout(props){
    const authCtx =  useContext(AuthContext);
    return(
            <div className = "flex min-h-screen ">
                <Sidebar />
                <div className="grow overflow-y-auto h-screen pl-10 w-[100%] bg-gray-100">
                    {props.children}
                </div>
            </div>
    )
}

export default Layout;