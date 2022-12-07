import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../auth-context";
import { useContext } from "react";

const defaultDoctorState = {};

const DoctorContext = React.createContext({
  doctorDetails: defaultDoctorState,
  onUpdateDoctor: (newDoctor) => {},
});

export default DoctorContext;

export function DoctorContextProvider(props) {
  const [doctorState, setDoctorState] = useState({});

  const authCtx = useContext(AuthContext);

  const fetchDoctorDetails = async () => {
    const doctorDetails = await axios.get(
      `http://localhost:5000/api/doctors/${authCtx?.id}`
    );
    setDoctorState(doctorDetails?.data?.doctor);
  };

  const updateDoctorHandler = async (newDoctor) => {
    const newDoctorDetails = await axios.patch(
      `http://localhost:5000/api/doctors/${authCtx?.id}`,
      newDoctor
    );
    setDoctorState(newDoctorDetails?.data?.doctor);
  };

  const doctorCtx = {
    doctorDetails: doctorState,
    onUpdateDoctor: updateDoctorHandler,
  };

  useEffect(() => {
    fetchDoctorDetails();
  }, [authCtx?.id]);

  return (
    <DoctorContext.Provider value={doctorCtx}>
      {props?.children}
    </DoctorContext.Provider>
  );
}
