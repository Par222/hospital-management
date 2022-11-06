import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import GenericModal from "../common/GenericModal";
import Book from "../appointments/Book";
import Slots from "../appointments/Slots";
const DoctorDetails = (props) => {
  console.log(props.certificates);
   const [posText,setPostText]=useState("Next")
   const [negText,setNegText]=useState("Cancel")
   const [title,setTitle]=useState("Appointment Scheduling")
   const [step,setStep]=useState(1)
   const [showModal,setShowModal]=useState(false)
   const [buttonDisabled,setButtonDisabled] = useState(false)
   const posHandler=()=>{
    setStep(step+1)
   }
   const negHandler=()=>{
    setStep(step-1)
   }
   const saveHandler=()=>{

   }
   const closeHandler=()=>{
    setShowModal(false)
   }
   const openHandler=()=>{
    setShowModal(true)
   }
   useEffect(()=>{
    if(step==3)
    setPostText("Book Now")
    else
    setPostText("Next")
    if(step==2 || step ==3)
     setNegText("Back")
     else
     setNegText("Cancel")
    if(step==1)
    setTitle("Appointment Scheduling")
    if(step ==2)
    setTitle("Mode of Appointment")
    if(step==3)
    setTitle("Payment")
     
   },[step])
   

  return (
    <>
      {showModal &&<GenericModal
        title={title}
        posText={posText}
        negText={negText}
        posHandler={posHandler}
        saveHandler={saveHandler}
        closeHandler={closeHandler}
        negHandler={negHandler}
        step ={step}
        isPos={true}
        isNeg={true}
        isStepModal ={true}
      >
        <Slots step={step} />
        <div className="flex justify-center w-[100%] space-x-3 mt-10">
        <span className={step==1?`bg-blue-900 w-10 h-1 rounded-md`:`bg-blue-100 w-10 h-1 rounded-md`}></span>
        <span className={step==2?`bg-blue-900 w-10 h-1 rounded-md`:`bg-blue-100 w-10 h-1 rounded-md`}></span>
        <span className={step==3?`bg-blue-900 w-10 h-1 rounded-md`:`bg-blue-100 w-10 h-1 rounded-md`}></span>
      </div>
      </GenericModal>}
      <div className={showModal && "h-[85vh] overflow-hidden"}>
        <div className="flex space-x-6 justify-center my-5 ">
          <div className="opacity-100 bg-blue-200 w-[90%]  rounded-md mt-10 ml-10 flex space-x-2">
            <div className="flex flex-col w-[70%]">
              <h1 className="font-bold text-3xl py-3 px-3 text-center text-blue-700 border-b-4 border-blue-800">
                {props.name}
              </h1>
              <p className="text-center text-xl my-3  text-slate-900 font-semibold">{`Specialization in ${props.category} problems`}</p>
              <p className="pb-4 pt-2 px-7  text-gray-600 italic w-[100%] text-center ">
                {props.des}
              </p>
              <div className="flex w-full justify-center my-5">
                <button className="bg-purple-600 text-white text-base rounded-md px-6 py-2" onClick={openHandler}>
                  BOOK AN APPOINTMENT
                </button>
              </div>
            </div>
            <div className="w-[30%]">
              <img
                src={props.img}
                className="w-[100%] h-full rounded-md "
              ></img>
            </div>
          </div>
        </div>

        {props.certificates && (
          <div className="flex my-5 mx-14 ">
            <div className="opacity-100 bg-sblu-100 w-[100%]  bg-blue-500  rounded-md  ml-10 flex flex-col space-x-2">
              <h1 className="font-bold text-3xl py-3 px-3 text-center text-white border-b-4 border-white w-full">
                Certificates
              </h1>
              <div className="flex flex-wrap space-x-4 items-center justify-center">
                {props.certificates.map((certificate) => (
                  <img src={certificate} className="w-[30%] py-10 h-[400px]" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default DoctorDetails;
