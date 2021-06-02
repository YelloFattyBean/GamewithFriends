/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/prop-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
// eslint-disable-next-line no-unused-vars
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler, DayView, Appointments, TodayButton, DateNavigator, Toolbar, AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';

const Appointment = ({
  children, style, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      background: 'linear-gradient(45deg, black 30%, grey 90%)',
      border: 0,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      borderRadius: '8px',
    }}
  >
    {children}
  </Appointments.Appointment>
);

const Calendar = ({ scheduleData, changeData }) => (
  <Paper>
    <Scheduler
      data={scheduleData}
      height={790}
    >
      <ViewState />
      <EditingState
        onCommitChanges={changeData}
      />
      <DayView
        startDayHour={0}
        endDayHour={24}
      />
      <Toolbar />
      <DateNavigator />
      <TodayButton />
      <Appointments
        appointmentComponent={Appointment}
      />
      <AppointmentTooltip
        showCloseButton
        showOpenButton
        showDeleteButton
      />
      <AppointmentForm />
    </Scheduler>
  </Paper>
);

export default Calendar;
