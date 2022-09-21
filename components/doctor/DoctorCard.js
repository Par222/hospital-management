import Card from "../common/Card"
import Link from "next/link"
const DoctorCard=props=>{
return(
    <div className="rounded-md bg-white shadow-2xl flex-col flex justify-center items-center w-[70%] my-5 mx-20">
        <div className="w-full h-[50%] ">
            <img src={props.img} className="rounded-md"></img>
        </div>
        <h1 className="text-center text-lg bg-blue-600 mb-1 text-white font-semibold font-sans w-full pb-1">{props.name}</h1>
        <div className="flex justify-between w-[70%] text-base text-blue-400 border-b-2 border-blue-700 py-2 font-semibold">
            <span>Specialist </span><span>{props.category}</span>
        </div>
        <div className="flex justify-between w-[70%] text-base  text-blue-400 border-b-2 border-blue-700 py-2 font-semibold">
            <span>Age </span><span>{props.age}</span>
        </div>
        <div className="flex justify-between w-[70%] text-base  text-blue-400 border-b-2 border-blue-700 py-2 font-semibold">
            <span>Consultation Fees </span><span>₹ {props.fees}</span>
        </div>
        <div>
            <div className="flex w-full space-x-7">
            <Link href={`/doctors/${props.id}`}>
            <a> <button className=" bg-blue-400 text-sm text-white py-1 px-3 my-5 rounded-md" >VIEW MORE</button></a>
            </Link>
           
            <button className=" bg-purple-700 text-sm text-white py-1 px-5 my-5 rounded-md" >CONSULT</button>
            </div>
        
        </div>
    </div>
)
}
export default DoctorCard