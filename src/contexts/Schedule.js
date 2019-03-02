import React, { createContext, useEffect, useState } from 'react';
import { getTime, getNow } from '../utils/getDates';
import { roundingCutoff } from '../utils/customerTimes';

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
    if (storedSchedule && storedSchedule.pickupHour) {
      // Check if it's too close timewise
      const nowMillis = getNow().valueOf();
      const pickupMillis = getTime(storedSchedule.pickupHour).valueOf();
      const pickupMinusNow = pickupMillis - nowMillis;
      const cutoffMinutesInMillis = (60 - roundingCutoff) * 60000;

      if (pickupMinusNow <= cutoffMinutesInMillis) {
        console.log(
          'Schedule discarded, stored pickup time is too soon or passed.',
        );
        return blankValues;
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
