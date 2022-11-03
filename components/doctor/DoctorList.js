import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import {ClassicSpinner} from "react-spinners-kit"
import axios from "axios";
const DoctorList = ({ expertise,fees}) => {
  let [filteredArray, setFilteredArray] = useState([]);
  const [docArray,setDocArray]=useState([])
  const [isLoading,setIsLoading]=useState(false)

  const fetchDoctors=async()=>{
    let result;
    
    result=await axios.get(`http://localhost:5000/api/doctors`)
    console.log(result.data)
    setDocArray(result.data.doctors)
    setFilteredArray(result.data.doctors)
  

  }
  useEffect(()=>{
    setIsLoading(true)
    fetchDoctors().then(()=>{
      setIsLoading(false)

    })

  },[])
  useEffect(()=>{
    if(docArray)
    {
      if(expertise=="All" && fees=="any")
      {
        setFilteredArray(docArray)
      }
      else if(fees=="any" && expertise!= "All")
      {
       setFilteredArray((docArray.filter((doc)=>doc.expertise==expertise)))
      }
      else if(expertise=="All" && fees !="any")
      {
        setFilteredArray((docArray.filter((doc)=>doc.fees<= +fees)))
      }
      else{
        setFilteredArray((docArray.filter((doc)=>doc.fees <= +fees && doc.expertise==expertise)))
      }
      
    }

   

  },[expertise,fees])
  useEffect(()=>{
    console.log(filteredArray)
  },[filteredArray])


  /*useEffect(() => {
    console.log(filteredArray, fees, type);
    if (fees == "any" && type == "all") setFilteredArray(DUMMY_DOCTORS);
    else if (fees == "any" && type != "all") {
      setFilteredArray(
        DUMMY_DOCTORS.filter((doc) => doc.category.toLowerCase() == type)
      );
    } else if (type == "all" && fees != "any") {
      setFilteredArray(DUMMY_DOCTORS.filter((doc) => doc.fees <= +fees));
    } else {
      setFilteredArray(
        DUMMY_DOCTORS.filter(
          (doc) => doc.category.toLowerCase() == type && doc.fees <= +fees
        )
      );
    }
  }, [fees, type]);*/
  
  
  return (
    <>
    {isLoading && <div className="flex justify-center w-full h-full">
      <ClassicSpinner size="30" color="#165FCC"></ClassicSpinner>
      </div>}
      {!isLoading &&<div className="grid grid-cols-3 w-[80%] my-5 mx-20">
        {filteredArray && filteredArray.length >0 && filteredArray.map((doc) => (
    <DoctorCard {...doc}></DoctorCard>))}
      </div>}
      {!isLoading && filteredArray.length == 0 && (
        <p className="flex justify-center items-center text-lg font-bold w-full mt-20 text-center">
          No Doctors Available
        </p>
      )}
    </>
  );
}
export default DoctorList;
