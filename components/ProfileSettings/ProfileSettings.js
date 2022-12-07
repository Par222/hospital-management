import Navbar from "./Navbar";
import { useState } from "react";
import MyProfile from "./MyProfile/MyProfile";
import EditProfile from "./EditProfile/EditProfile";
import Certificates from "./Certificates/Certificates";

function ProfileSettings(props) {
  const [currentTab, setCurrentTab] = useState("My Profile");

  const tabClickHandler = (tabClicked) => {
    setCurrentTab(tabClicked);
  };

  return (
    <div className="mt-8 space-y-5">
      <h2 className="text-2xl font-title font-bold">Settings</h2>
      <Navbar currentTab={currentTab} onClickTab={tabClickHandler} />
      {currentTab === "My Profile" && <MyProfile />}
      {currentTab === "Edit Profile" && <EditProfile />}
      {currentTab === "Certificates" && <Certificates />}
    </div>
  );
}

export default ProfileSettings;
