import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DayView, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import AppointmentsInfoCard from "../DoctorOverview/AppointmentInfoCard"

import { appointments as monthAppointments } from './TodayAppointments';


function AppointmentCalendar(props) {
  
    const [appointments, setAppointments] = useState(monthAppointments);
    const [currentView, setCurrentView] = useState("Week");

    const viewChangeHandler = (event) =>{
      console.log(event.target.value)
        setCurrentView(event.target.value);
    }

    const viewStateActions = <select defaultValue = {currentView} onChange = {viewChangeHandler} className = "text-[13px] py-1 px-4 mb-2 rounded text-gray-400">
      <option value = "Month" >Month</option>
      <option value = "Week">Week</option>
      <option value = "Work Week">Work Week</option>
      <option value = "Day" >Day</option>
    </select>

    return (
      <AppointmentsInfoCard header = "Appointments" action = {viewStateActions} className = "p-8">

          <Scheduler
            data={appointments}
            height={600}
          >
            <ViewState
              defaultCurrentDate="2018-07-25"
              currentViewName={currentView}
            />
            <WeekView
              startDayHour={10}
              endDayHour={19}
            />
            <WeekView
              name="Work Week"
              excludedDays={[0, 6]}
              startDayHour={9}
              endDayHour={19}
            />
            <MonthView />

            <Appointments />
          </Scheduler>
      </AppointmentsInfoCard>
    );
  }

export default AppointmentCalendar;

