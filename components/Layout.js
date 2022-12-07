import Sidebar from "./common/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { AppointmentContextProvider } from "../store/Doctor/appointments-context";
import { DoctorContextProvider } from "../store/Doctor/doctor-context";
import SearchBar from "./common/SearchBar";
import axios from "axios";
import ProfileButton from "./common/ProfileButton";

function Layout(props) {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {authCtx.userType === "Doctor" ? (
        <DoctorContextProvider>
          <AppointmentContextProvider>
            <div className="flex min-h-screen ">
              <Sidebar />
              <div className="flex-grow overflow-y-auto h-screen px-10 w-[100%] bg-gray-100 pb-10 flex flex-col space-y-4">
                <div className="flex justify-between">
                  <SearchBar />
                  <ProfileButton />
                </div>
                {props.children}
              </div>
            </div>
          </AppointmentContextProvider>
        </DoctorContextProvider>
      ) : (
        props?.children
      )}
    </>
  );
}

export default Layout;
