import Router from "next/router";
import { DUMMY_DOCTORS } from "../../components/doctor/DoctorList";
import { useRouter } from "next/router";
import DoctorDetails from "../../components/doctor/DoctorDetails";
import { useEffect } from "react";
import { ClassicSpinner } from "react-spinners-kit";
import axios from "axios";

import NavBar from "../../components/common/NavBar";
import { useState } from "react";
const Slug = () => {
  const [doctor, setDoctor] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const id = useRouter().query.slug;
  const fetchDoctors = async () => {
    let result;

    result = await axios.get(`http://localhost:5000/api/doctors/${id}`);
    console.log(result.data);
    setDoctor(result.data.doctor);
  };
  useEffect(() => {
    setIsLoading(true);
    fetchDoctors().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      {isLoading && (
        <div className="flex justify-center w-full h-full">
          <ClassicSpinner size="30" color="#165FCC"></ClassicSpinner>
        </div>
      )}
      {!isLoading && doctor && <DoctorDetails {...doctor}></DoctorDetails>}
    </>
  );
};
export default Slug;
