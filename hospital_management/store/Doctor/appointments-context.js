import React, { useReducer, useContext, useEffect } from "react";
import { appointments as todayAppointments } from "../../components/ScheduleAppointments/TodayAppointments";

const defaultAppointmentsState = [];

const AppointmentsContext = React.createContext({
  appointments: defaultAppointmentsState,
  addAppointment: (appointment) => {},
  editAppointment: (appointmentID) => {},
  deleteAppointment: (appointmentID) => {},
});

export default AppointmentsContext;

function appointmentsReducer(state, action) {
  if (action.type === "SET_APPOINTMENTS") {
    return action.value.appointments;
  }
  if (action.type === "ADD_APPOINTMENT") {
    console.log(state);
    const newAppointments = state.concat(action.value);
    return newAppointments;
  }
  if (action.type === "DELETE_APPOINTMENT") {
    const newAppointments = state.filter((appointment) => {
      return appointment.id !== action.value;
    });
    return newAppointments;
  }
  if (action.type === "EDIT APPOINTMENT") {
    const appointmentIndex = state.findIndex((appointment) => {
      return appointment.id === action.value.appointment.id;
    });
    const newAppointments = [...state];
    const newAppointment = { ...action.value.appointment };
    newAppointments[appointmentIndex] = newAppointment;
    return newAppointments;
  }
  return defaultAppointmentsState;
}

export function AppointmentContextProvider(props) {
  const [appointmentsState, appointmentsDispatchFunction] = useReducer(
    appointmentsReducer,
    defaultAppointmentsState
  );

  const fetchAppointmentsHandler = () => {
    
  }

  const addAppointmentHandler = (appointment) => {
    appointmentsDispatchFunction({
      type: "ADD_APPOINTMENT",
      value: appointment,
    });
  };

  const deleteAppointmentHandler = (appointmentID) => {
    appointmentsDispatchFunction({
      type: "DELETE_APPOINTMENT",
      value: appointmentID,
    });
  };

  const editAppointmentHandler = (appointment) => {
    appointmentsDispatchFunction({
      type: "EDIT_APPOINTMENT",
      value: appointment,
    });
  };

  const appointmentsCtx = {
    appointments: appointmentsState,
    addAppointment: addAppointmentHandler,
    deleteAppointment: deleteAppointmentHandler,
    editAppointment: editAppointmentHandler,
  };

  useEffect(() => {
    
  }, [])

  return (
    <AppointmentsContext.Provider value={appointmentsCtx}>
      {props.children}
    </AppointmentsContext.Provider>
  );
}
