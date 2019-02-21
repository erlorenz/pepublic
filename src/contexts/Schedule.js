import React, { createContext, useEffect, useState } from 'react';

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children, history }) => {
  const initialState = () =>
    JSON.parse(localStorage.getItem('schedule')) || {
      pickupDate: '',
      pickupHour: '',
      returnDate: '',
      returnHour: '',
      hotel: '',
      room: '',
    };

  const [schedule, setSchedule] = useState(initialState);

  useEffect(() => localStorage.setItem('schedule', JSON.stringify(schedule)), [
    schedule,
  ]);

  const updateSchedule = values => {
    console.log('Setting schedule to ', values);
    setSchedule(values);
  };

  const clearSchedule = () => {
    setSchedule({});
  };

  return (
    <ScheduleContext.Provider
      value={{
        schedule,
        setSchedule: updateSchedule,
        clearSchedule,
      }}>
      {children}
    </ScheduleContext.Provider>
  );
};
