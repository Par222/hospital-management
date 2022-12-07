import AppointmentsTodayListItem from "./AppointmentsTodayListItem";
import AppointmentInfoCard from "./AppointmentInfoCard";
import { useContext, useEffect, useState, useCallback } from "react";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import AppointmentsContext from "../../store/Doctor/appointments-context";

const DUMMY_APPOINTMENTS = [
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 1,
  },
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 2,
  },
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 3,
  },
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 4,
  },
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 5,
  },
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 6,
  },
];

function AppointmentsToday(props) {
  const [appointmentsToday, setAppointmentsToday] = useState([]);
  const authCtx = useContext(AuthContext);
  const appointmentsCtx = useContext(AppointmentsContext);

  const fetchUpcomingAppointmentsHandler = useCallback(async () => {
    const appointmentsData = await axios.get(
      `http://localhost:5000/api/appointments/doctor-upcoming-appointment-list/${authCtx.id}`
    );
    const currentDate = new Date();
    const requiredAppointments = appointmentsData?.data?.appointments?.filter((item) => {
      const appointmentDate = new Date(item?.appointment?.slot?.date); 
      return appointmentDate.getDate() === currentDate.getDate() && appointmentDate.getMonth() === currentDate.getMonth() && item?.appointment?.status === "Confirmed";
    });
    console.log(requiredAppointments)
    setAppointmentsToday(requiredAppointments);
  }, [authCtx.id]);

  const appointments = appointmentsToday.map((appointment) => {
    return (
      <AppointmentsTodayListItem
        key={appointment.appointment.id}
        id={appointment.appointment.id}
        name={appointment.patientData.name}
        time={appointment.appointment.slot.start_time}
        description={appointment.appointment.illness}
        profilePicture={appointment.patientData.image}
      />
    );
  });


  useEffect(() => {
    fetchUpcomingAppointmentsHandler();
  }, [appointmentsCtx?.appointments]);

  return (
    <AppointmentInfoCard className="h-[583px]" header="Appointments Today">
      <ul className="w-[100%] flex flex-col justify-start">{appointments}</ul>
    </AppointmentInfoCard>
  );
}

export default AppointmentsToday;
