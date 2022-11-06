import Sidebar from "./common/Sidebar/Sidebar";
import React from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { AppointmentContextProvider } from "../store/Doctor/appointments-context";
import SearchBar from "./common/SearchBar";

function Layout(props) {
  const authCtx = useContext(AuthContext);
  const userType = "Doctor";
  return (
    <>
      {userType === "Doctor" && (
        <AppointmentContextProvider>
          <div className="flex min-h-screen ">
            <Sidebar />
            <div className="flex-grow overflow-y-auto h-screen px-10 w-[100%] bg-gray-100 pb-10 flex flex-col space-y-4">
              <SearchBar />
              {props.children}
            </div>
          </div>
        </AppointmentContextProvider>
      )}
    </>
  );
}

export default Layout;
