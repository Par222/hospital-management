import React, { useReducer, useContext } from "react";
import { appointments as todayAppointments } from "../../components/ScheduleAppointments/TodayAppointments";

const defaultAppointmentsState = [...todayAppointments];
console.log(defaultAppointmentsState)

const AppointmentsContext = React.createContext(
    {
        appointments: defaultAppointmentsState,
        addAppointment: (appointment) => {},
        editAppointment: (appointmentID) => {},
        deleteAppointment: (appointmentID) => {}
    }
)

export default AppointmentsContext;

function appointmentsReducer(state, action){
    if(action.type === "ADD_APPOINTMENT"){
        console.log(state)
        const newAppointments = state.concat(action.value);
        return newAppointments;
    }
    if(action.type === "DELETE_APPOINTMENT"){
        const newAppointments = state.filter((appointment) => {
            return appointment.id !== action.value;
        })
        return newAppointments;
    }
    // if(action.type)
    return defaultAppointmentsState;
}

export function AppointmentContextProvider(props){
    const [appointmentsState, appointmentsDispatchFunction] = useReducer(appointmentsReducer, defaultAppointmentsState);

    const addAppointmentHandler = (appointment) => {
        appointmentsDispatchFunction({type: "ADD_APPOINTMENT", value: appointment});
    }

    const deleteAppointmentHandler = (appointmentID) => {
        appointmentsDispatchFunction({type: "DELETE_APPOINTMENT", value: appointmentID});
    }

    const appointmentsCtx = {
        appointments: appointmentsState,
        addAppointment: addAppointmentHandler,
        deleteAppointment: deleteAppointmentHandler,
    };

    console.log(appointmentsCtx)

    return(
        <AppointmentsContext.Provider value = {appointmentsCtx}>
            {props.children}
        </AppointmentsContext.Provider>
    )

}