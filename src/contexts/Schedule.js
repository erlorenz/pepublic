import { Formik } from 'formik';
import React, { createContext, useEffect, useState } from 'react';
import * as Yup from 'yup';

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children, history }) => {
  const initialState = JSON.parse(localStorage.getItem('schedule')) || {
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

  const handleSubmit = (values, actions) => {
    console.log('Submitted');
    setSchedule(values);
    actions.setSubmitting(false);
  };

  const schema = Yup.object().shape({
    pickupDate: Yup.string().required('Please choose a pickup date.'),
    pickupHour: Yup.number().required('Please choose a pickup time.'),
    returnDate: Yup.string().required('Please choose a return date.'),
    returnHour: Yup.number().required('Please choose a return time.'),
    hotel: Yup.string().required('Please choose a hotel.'),
    room: Yup.string().required('Please choose a room.'),
  });

  return (
    <Formik
      initialValues={initialState}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      {({ submitForm, values, ...formikProps }) => (
        <ScheduleContext.Provider
          value={{
            schedule,
            submitForm,
            values,
            formikProps,
          }}>
          {children}
        </ScheduleContext.Provider>
      )}
    </Formik>
  );
};
