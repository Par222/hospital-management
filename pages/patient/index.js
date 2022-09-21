import NavBar from "../../components/common/NavBar";
import styles from "../../styles/Home.module.css"
import Card from "../../components/common/Card";
import Link from "next/link";
const Index = props=>{
    return(
        <>
        <NavBar></NavBar>
        <div className={`w-full ${styles.home} h-[87vh] flex space-x-2 `}>
           
           
            <div className=" font-bold flex flex-col bg-slate-200 rounded-md h-[50%] w-[50%] opacity-80 py-10 px-10 mt-20 mx-40 ">
            <h1 className=" text-4xl text-blue-500">{"Best Care &"} </h1>
            <h1 className="text-4xl text-blue-500">{"Better Doctor "}</h1>
            <p className="mt-5 text-lg text-slate-700">We care for your well being and help you get instant attention for all your problems . So what are u waiting for, book an appointment now.</p>
            <Link href="/appoitnment">
            <a><button className="text-white text-lg my-5 font-normal bg-blue-800 px-4 py-2 rounded-md">Book  An  Appointment</button></a>
            </Link>
            </div>
            <div className=" font-bold flex flex-col bg-blue-200 rounded-md h-[60%] w-[26%] opacity-80 py-10 px-10 mt-20 mx-40 ">
            <div className="flex space-x-3 items-center"><h1 className=" text-3xl text-slate-800">{"Working Hours"} </h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30} height={30}><path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
            </div>

            <ul className="w-[90%]">
                <li className="my-3 font-semibold  border-b-2 border-slate-800 pb-2 flex justify-between"><span>Sun</span>  <span>9.00 am - 5.00pm</span></li>
                <li className="my-3 font-semibold  border-b-2 border-slate-800 pb-2 flex justify-between"><span>Mon - Thurs</span>  <span>8.00 am - 9.00pm</span></li>
                <li className="my-3 font-semibold  border-b-2 border-slate-800 pb-2 flex justify-between"><span>Fri - Sat</span>  <span>9.00 am - 7.00pm</span></li>
            </ul>

            <Link href="/doctors">
            <a><button className="text-blue-200 text-lg my-5 font-normal bg-slate-800 px-4 py-2 rounded-md">View All Doctors</button></a>
            </Link>
            </div>


          
        
        </div>
      
        </>
    )

}
export default Index;