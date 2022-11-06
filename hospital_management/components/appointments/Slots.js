import { useState } from "react";
import Book from "./Book";
import Online from "./Online";
const Slots = ({step}) => {
  
  
  return (
    <div>
      {step == 1 && (
        <form className="flex w-full justify-center items-center flex-wrap">
          <div className="my-3 mx-5 w-[40%] flex flex-col">
            <label htmlFor="" className="text-lg font-semibold my-2">
              Select Appointment Date
              <span className="text-red-600 mx-1">*</span>
            </label>
            <Book />
          </div>

          <div className="flex flex-col ml-5 my-3 w-[50%] ">
            <label htmlFor="time " className="text-lg font-semibold my-2">
              Select Time Slot <span className="text-red-600 mx-1">*</span>
            </label>
            <select
              className="rounded-md  text-base font-base border border-slate-400 bg-slate-100 py-3.5 px-1 w-[80%] "
              placeholder="Select Slot.."
              name="time"
            >
              <option value="first">9:00AM - 10.30AM </option>
              <option value="second">11:00AM - 12.30PM</option>
              <option value="third">1.30PM - 3.00PM</option>
              <option value="fourth">3:30PM - 5.00PM</option>
              <option value="fifth">5.30PM -7.00PM</option>
            </select>
          </div>
          <div className="flex flex-col  my-1 w-[100%] ml-5 ">
            <label htmlFor="time " className="text-lg font-semibold my-2">
              Select Mode of Appointment{" "}
              <span className="text-red-600 mx-1">*</span>
            </label>
            <select
              className="rounded-md  text-base font-base border border-slate-400 bg-slate-100 py-3.5 px-1 w-[42%] "
              placeholder="Select Mode.."
              name="time"
            >
              <option value="online">Online </option>
              <option value="offline">Offline</option>
            </select>
          </div>
        </form>
      )}
      {
        step==2 && <Online></Online>
      }
     
    </div>
  );
};
export default Slots;
