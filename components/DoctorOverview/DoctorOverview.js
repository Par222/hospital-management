import GeneralInfo from "./GeneralInfo";
import MiddleDiv from "./MiddleDiv";
function DoctorOverview(props){
    return(
        <div className = "min-h-[100%] pl-[10%] w-[100%] bg-gray-100 flex flex-col ">
            <GeneralInfo />
            <MiddleDiv />
        </div>
    )
}

export default DoctorOverview;