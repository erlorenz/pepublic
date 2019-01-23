import React, { createContext, useState, useEffect } from 'react';

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('schedule')) || [];
  const [schedule, setSchedule] = useState(initialState);

  useEffect(() => localStorage.setItem('schedule', JSON.stringify(schedule)), [
    schedule,
  ]);

  return (
    <ScheduleContext.Provider
      value={{
        schedule,
      }}>
      {children}
    </ScheduleContext.Provider>
  );
};
