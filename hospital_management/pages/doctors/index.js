import { useRef, useState } from "react";
import NavBar from "../../components/common/NavBar";
import DoctorList from "../../components/doctor/DoctorList";
const Index = (props) => {
   const [fees,setFees]=useState("any")
   const [type,setType]=useState("all")
  const filterHandler = (event) => {
   setType(event.target.value)
  };
  
  const feesHandler = (e) => {
   setFees(e.target.value)
  
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-blue-900 py-5 px-10 flex">
        <form className="flex justify-evenly w-[100%] mx-4 items-center">
          <label htmlFor="doctors" className="text-xl text-white font-semibold">
            Select doctor type
          </label>
          <select
            name="doctors"
            onChange={filterHandler}
            className="rounded-md w-[20%] border border-blue-900 bg-blue-100 px-2 py-1"
          >
            <option value="all">All</option>
            <option value="eyes">Eye</option>
            <option value="ent">ENT</option>
            <option value="teeth">Teeth</option>
            <option value="skin">Skin</option>
            <option value="stomach">Stomach</option>
          </select>
          <label></label>
          <label htmlFor="doctors" className="text-xl text-white font-semibold">
            Select consultation fees
          </label>
          <select
            name="doctors"
            onChange={feesHandler}
            className="rounded-md w-[20%] border border-blue-900 bg-blue-100 px-2 py-1"
          >
            <option value="any">Any</option>
            <option value="500">Below 500</option>
            <option value="1000">Below 1000</option>
            <option value="1500">Below 1500</option>
            <option value="2000">Below 2000</option>
          </select>
        </form>
      </div>
      <DoctorList fees={fees} type={type}></DoctorList>
    </div>
  );
};
export default Index;
