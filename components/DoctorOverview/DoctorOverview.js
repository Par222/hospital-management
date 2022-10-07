import GeneralInfo from "./GeneralInfo";
import MiddleDiv from "./MiddleDiv";
function DoctorOverview(props){
    return(
        <div className = "flex flex-col">
            <GeneralInfo />
            <MiddleDiv />
        </div>
    )
}

export default DoctorOverview;