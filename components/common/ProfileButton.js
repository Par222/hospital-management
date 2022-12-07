import ProfilePicture from "./ProfilePicture";
import DoctorContext from "../../store/Doctor/doctor-context";
import AuthContext from "../../store/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";

function ProfileButton(props) {
  const [optionsAreVisible, setOptionsAreVisible] = useState(false);

  const doctorCtx = useContext(DoctorContext);
  const authCtx = useContext(AuthContext);

  const buttonClickHandler = () => {
    setOptionsAreVisible((prevState) => {
      return !prevState;
    });
  };

  const logoutHandler = () => {
    authCtx?.onLogout();
  };

  const options = (
    <div className="absolute -bottom-6 left-0 w-full">
      <button className="flex items-center space-x-2 bg-white px-3 py-1 w-full" onClick={logoutHandler}>
      <FontAwesomeIcon icon={faRightFromBracket} className="text-red-600" />
        <p className="text-sm font-medium">Logout</p>
      </button>
    </div>
  );

  return (
    <div className="relative py-2">
      <button className="flex items-center space-x-3 hover:bg-gray-300 p-3 rounded-lg" onClick={buttonClickHandler}>
        <ProfilePicture
          className="h-[30px] w-[30px]"
          profilePicture={doctorCtx?.doctorDetails?.image}
        />
        <p className="font-medium">{doctorCtx?.doctorDetails?.name}</p>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      {optionsAreVisible && options}
    </div>
  );
}

export default ProfileButton;
