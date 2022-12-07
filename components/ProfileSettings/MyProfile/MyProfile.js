import DoctorContext from "../../../store/Doctor/doctor-context";
import { useContext } from "react";
import ProfileCard from "./ProfileCard";
import DoctorDetails from "./DoctorDetails";
import Reviews from "./Reviews";

function MyProfile(props) {
  const doctorCtx = useContext(DoctorContext);
  const doctorDetails = doctorCtx?.doctorDetails;

  return (
    <div className="flex space-x-10">
      <ProfileCard
        name={doctorDetails?.name}
        age={doctorDetails?.age}
        gender={doctorDetails?.gender}
        expertise={doctorDetails?.expertise}
        image={doctorDetails?.image}
      />
      <DoctorDetails 
        aboutMe={doctorDetails?.des}
        education={doctorDetails?.education}
        email={doctorDetails?.email}
        phone={doctorDetails?.phone}
      />
      <Reviews />
    </div>
  );
}

export default MyProfile;
