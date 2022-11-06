import PatientProfile from "./PatientProfile";
import PreviousAppointments from "./PreviousAppointments";
import MedicalHistory from "./MedicalHistory";
import Prescription from "./Prescription";

function PatientDetails(props){
  return(
    <div className="flex space-x-10 mt-8">
      <div className="flex-grow space-y-8">
        <PreviousAppointments />
        <MedicalHistory />
        <Prescription />
      </div>
      <PatientProfile />
    </div>
  )
}

export default PatientDetails;