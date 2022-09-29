import AppointmentsInfo from "./ApppointmentsInfo";
import PatientsInfo from "./PatientsInfo";
import AppointmentsToday from "./AppointmentsToday";

function MiddleDiv(props){
    return(
        <div className = "w-[100%] flex justify-center">
            <AppointmentsInfo />
            <div className = "mx-16">
                <PatientsInfo />
            </div>
            <AppointmentsToday />
        </div>
    )
}

export default MiddleDiv;