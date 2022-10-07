import AppointmentInfoCard from "../DoctorOverview/AppointmentInfoCard";
import AppointmentDetailsListItem from "./AppointmentDetailsListItem";
import AppointmentDetailsModal from "./AppointmentDetailsModal";
import GenericModal from "../common/GenericModal";
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
    const [isModalVisible, setIsModalVisible] = useState(true);
    // const [modalDetails, setModalDetails] = useState(null);

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

    const closeModalHandler = () =>{
        setIsModalVisible(false);
        // setModalDetails(null);
    }

    const viewAppointmentDetailsHandler = (appointmentID) =>{
        // setModalDetails(
        // )
        setIsModalVisible(true);   
    }

    const appointmentDetails = appointments.map((appointment) =>{
        const onButtonClick = appointment.isConfirmed == null && {onConfirmAppointment: appointmentConfirmationHandler.bind(this, appointment.id), onDeclineAppointment: appointmentDeclinationHandler.bind(this, appointment.id)};
        return <AppointmentDetailsListItem key = {appointment.id}
            id = {appointment.id} 
            name = {appointment.name}
            profilePicture = {appointment.profilePicture}
            date = {appointment.date}
            time = {appointment.time}
            isConfirmed = {appointment.isConfirmed}
            gender = {appointment.gender}
            {...onButtonClick}
            onAppointmentClick = {viewAppointmentDetailsHandler}
        />
    });

    const viewAllAppointmentsHandler = () =>{
        Router.push("/doctor/appointments");
    }

    return(
            <>
                {/* {isModalVisible && modalDetails} */}
                
            <GenericModal title = "Appointment Details" 
            closeHandler = {closeModalHandler}
            isStepModal = {false}
            posText = "Confirm"
            posHandler = {appointmentConfirmationHandler.bind(this)}
            negText = "Decline"
            negHandler = {appointmentDeclinationHandler}>
                <AppointmentDetailsModal name = "Param Kothari"
                    age = "22"
                    gender = "Male"
                    mode = "Video Conferencing"
                    illness = "Fever"
                    description = "Mild headache, cold, cough"
                    date = "10 October"
                    time = "10:30 AM"
                />
            </GenericModal>
                <AppointmentInfoCard className = "" header = "Appointment Requests" action = {
                    <button className = "text-[13.5px] text-cyan-400 hover:text-indigo-500" 
                    onClick = {viewAllAppointmentsHandler}>View All {">"}</button>
                }>
                    <ul className = "w-[100%] flex flex-col justify-center">{appointmentDetails}</ul>
                </AppointmentInfoCard>
            </>
    )
}

export default AppointmentsInfo;