import { useState } from "react";
import GenericModal from "../../common/GenericModal";

const Request = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="w-[100%] justify-evenly text-xl my-4 py-5 rounded-md text-blackShade-50 bg-tertiarywhite-50 items-center flex shadow-md">
        <div className="w-[20%] text-center">{props.ambulance.name}</div>
        <div className="w-[25%] text-center">
          {props.ambulance.emergency.contact}
        </div>
        <div className="w-[35%] text-left">
          {props.ambulance.emergency.details}
        </div>
        <div
          className={
            props.status == "Pending"
              ? "rounded-md w-[10%] text-center bg-tertiaryViolet text-tertiarywhite-100 py-2"
              : " rounded-md w-[10%] text-center bg-tertiaryblue-50 text-tertiarywhite-100 py-2 cursor-pointer"
          }
          onClick={()=>setShowModal(true)}
        >
          {props.status}
        </div>
      </div>
      {showModal && <GenericModal title="Ambulance Details" posText="Done" negText="Cancel"></GenericModal>}
    </>
  );
};
export default Request;
