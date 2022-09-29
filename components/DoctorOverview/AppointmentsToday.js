import AppointmentsTodayListItem from "./AppointmentsTodayListItem";
import AppointmentInfoCard from "./AppointmentInfoCard";

const DUMMY_APPOINTMENTS = [{
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 1
},
{
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 2
},
{
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 3
},
{
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 4
},
{
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 5
},
{
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 6
}];

function AppointmentsToday(props){
    const appointments = DUMMY_APPOINTMENTS.map((appointment) =>{
        return(
            <AppointmentsTodayListItem key = {appointment.id}
            id = {appointment.id}
            name = {appointment.name}
            time = {appointment.time}
            description = {appointment.description}
            profilePicture = {appointment.profilePicture} />
        )
    })

    return(
        <AppointmentInfoCard className = "w-[27%]" header = "Appointments Today">
            <ul className = "w-[100%] flex flex-col justify-center">
                {appointments}
            </ul>
        </AppointmentInfoCard>
    )
}

export default AppointmentsToday;