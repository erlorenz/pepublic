import React, { createContext, useEffect, useState } from 'react';
import { getTime, getNow } from '../utils/getDates';

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children, history }) => {
  const blankValues = {
    pickupDate: '',
    pickupHour: '',
    returnDate: '',
    returnHour: '',
    hotel: '',
    room: '',
  };

  // Check if time has passed and there are old ones in there.
  const initialState = () => {
    const storedSchedule = JSON.parse(localStorage.getItem('schedule'));

    // Check if there are values and not blank
    if (storedSchedule.pickupHour) {
      // Check if it's a day old
      if (getNow().day > getTime(storedSchedule.pickupHour).day) {
        console.log('Schedule discarded, one day past.');
        return blankValues;
      }

      // Check if too much time has passed on same day
      const nowHour = getNow().hour;
      const storedHour = getTime(storedSchedule.pickupHour).hour;
      const diff = storedHour - nowHour;

      if (diff < 2) {
        console.log('Scheduled discarded, too much time passed.');
        return blankValues;
      } else {
        console.log('Previous schedule hydrated.');
        return storedSchedule;
      }
    }
    return storedSchedule || blankValues;
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
    setSchedule(blankValues);
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
