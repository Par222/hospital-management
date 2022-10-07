import AppointmentsInfo from "./ApppointmentsInfo";
import PatientsInfo from "./PatientsInfo";
import AppointmentsToday from "./AppointmentsToday";
import PatientGenderChart from "./PatientGenderChart";

function MiddleDiv(props){
    return(
        <div className = "w-[100%] flex">
            <div className = "w-[27%]">
                <AppointmentsInfo />
            </div>
            <div className = "mx-6 w-[40%]">
                <PatientsInfo />
                <PatientGenderChart />
            </div>
            <div className = "w-[27%]">
                <AppointmentsToday />
            </div>
        </div>
    )
}

export default MiddleDiv;