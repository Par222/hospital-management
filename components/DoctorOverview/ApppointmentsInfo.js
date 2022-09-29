import AppointmentInfoCard from "./AppointmentInfoCard";
import AppointmentDetailsListItem from "./AppointmentDetailsListItem";
import { useRouter } from "next/router";
import { useState } from "react";

const DUMMY_APPOINTMENTS = [{
    name: "Param Kothari",
    date: "29 September",
    time: "9:30 AM",
    profilePicture: "",
    isConfirmed: null,
    gender: "Male",
    id: 1
},
{
    name: "Param Kothari",
    date: "29 September",
    time: "9:30 AM",
    profilePicture: "",
    isConfirmed: null,
    gender: "Male",
    id: 2
},
{
    name: "Param Kothari",
    date: "29 September",
    time: "9:30 AM",
    profilePicture: "",
    isConfirmed: null,
    gender: "Male",
    id: 3
},
{
    name: "Param Kothari",
    date: "29 September",
    time: "9:30 AM",
    profilePicture: "",
    isConfirmed: null,
    gender: "Male",
    id: 4
},
{
    name: "Param Kothari",
    date: "29 September",
    time: "9:30 AM",
    profilePicture: "",
    isConfirmed: null,
    gender: "Male",
    id: 5
},
{
    name: "Param Kothari",
    date: "29 September",
    time: "9:30 AM",
    profilePicture: "",
    isConfirmed: null,
    gender: "Male",
    id: 6
}]

function AppointmentsInfo(props){
    const Router = useRouter();
    const [appointments, setAppointments] = useState(DUMMY_APPOINTMENTS);

    const appointmentConfirmationHandler = (appointmentID) =>{
        setAppointments((prevAppointments) =>{
            const requiredAppointment = prevAppointments.filter((appointment) => {
                return appointment.id === appointmentID;
            })[0];
            const requiredAppointmentIndex = prevAppointments.indexOf(requiredAppointment);
            const newAppointment = {...requiredAppointment, isConfirmed: true};
            const newAppointments = [...prevAppointments];
            newAppointments[requiredAppointmentIndex] = newAppointment;
            return newAppointments;
        })
    }

    const appointmentDeclinationHandler = (appointmentID) =>{
        setAppointments((prevAppointments) =>{
            const requiredAppointment = prevAppointments.filter((appointment) => {
                return appointment.id === appointmentID;
            })[0];
            const requiredAppointmentIndex = prevAppointments.indexOf(requiredAppointment);
            const newAppointment = {...requiredAppointment, isConfirmed: false};
            const newAppointments = [...prevAppointments];
            newAppointments[requiredAppointmentIndex] = newAppointment;
            return newAppointments;
        })
    }

    const appointmentDetails = appointments.map((appointment) =>{
        const onClick = appointment.isConfirmed == null && {onConfirmAppointment: appointmentConfirmationHandler, onDeclineAppointment: appointmentDeclinationHandler};
        return <AppointmentDetailsListItem key = {appointment.id}
            id = {appointment.id} 
            name = {appointment.name}
            profilePicture = {appointment.profilePicture}
            date = {appointment.date}
            time = {appointment.time}
            isConfirmed = {appointment.isConfirmed}
            gender = {appointment.gender}
            {...onClick}
        />
    });

    const viewAllAppointmentsHandler = () =>{
        Router.push("/doctor/appointments");
    }

    return(
            <AppointmentInfoCard className = "w-[27%]" header = "Appointment Requests" action = {
                <button className = "text-[13.5px] text-cyan-400 hover:text-indigo-500" 
                onClick = {viewAllAppointmentsHandler}>View All {">"}</button>
            }>
                <ul className = "w-[100%] flex flex-col justify-center">{appointmentDetails}</ul>
            </AppointmentInfoCard>
    )
}

export default AppointmentsInfo;