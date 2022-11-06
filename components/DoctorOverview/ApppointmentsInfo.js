import AppointmentInfoCard from "./AppointmentInfoCard";
import AppointmentDetailsListItem from "../ScheduleAppointments/AppointmentDetailsListItem";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { DUMMY_APPOINTMENTS } from "../ScheduleAppointments/AppointmentsInfo";
import AppointmentsContext from "../../store/Doctor/appointments-context";

function AppointmentsInfo(props) {
  const Router = useRouter();
  const appointmentsCtx = useContext(AppointmentsContext);

  const [appointments, setAppointments] = useState(DUMMY_APPOINTMENTS);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const appointmentConfirmationHandler = (appointmentID) => {
    setAppointments((prevAppointments) => {
      const requiredAppointment = prevAppointments.filter((appointment) => {
        return appointment.id === appointmentID;
      })[0];
      const requiredAppointmentIndex =
        prevAppointments.indexOf(requiredAppointment);
      const newAppointment = { ...requiredAppointment, status: "Confirmed" };
      const newAppointments = [...prevAppointments];
      newAppointments[requiredAppointmentIndex] = newAppointment;
      appointmentsCtx.addAppointment(newAppointment);
      return newAppointments;
    });
  };

  const appointmentDeclinationHandler = (appointmentID) => {
    setAppointments((prevAppointments) => {
      const requiredAppointment = prevAppointments.filter((appointment) => {
        return appointment.id === appointmentID;
      })[0];
      const requiredAppointmentIndex =
        prevAppointments.indexOf(requiredAppointment);
      const newAppointment = { ...requiredAppointment, status: "Rejected" };
      const newAppointments = [...prevAppointments];
      newAppointments[requiredAppointmentIndex] = newAppointment;
      return newAppointments;
    });
  };

  const appointmentDetails = appointments.map((appointment) => {
    const onClick = appointment.isConfirmed == null && {
      onConfirmAppointment: appointmentConfirmationHandler,
      onDeclineAppointment: appointmentDeclinationHandler,
    };
    return (
      <AppointmentDetailsListItem
        key={appointment.id}
        id={appointment.id}
        name={appointment.title}
        profilePicture={appointment.profilePicture}
        date={appointment.startDate.getDate()}
        time={appointment.time}
        status={appointment.status}
        gender={appointment.gender}
        {...onClick}
      />
    );
  });

  const viewAllAppointmentsHandler = () => {
    Router.push("/doctor/appointments");
  };

  return (
    <AppointmentInfoCard
      className=""
      header="Appointment Requests"
      action={
        <button
          className="text-[13.5px] text-cyan-400 hover:text-indigo-500"
          onClick={viewAllAppointmentsHandler}
        >
          View All {">"}
        </button>
      }
    >
      <ul className="w-[100%] flex flex-col justify-center">
        {appointmentDetails}
      </ul>
    </AppointmentInfoCard>
  );
}

export default AppointmentsInfo;
