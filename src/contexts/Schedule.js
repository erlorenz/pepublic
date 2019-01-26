import { Formik } from 'formik';
import React, { createContext, useEffect, useState } from 'react';
import * as Yup from 'yup';

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children, history }) => {
  const initialState = JSON.parse(localStorage.getItem('schedule')) || {
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    hotel: '',
    room: '',
  };

  const [schedule, setSchedule] = useState('');

  useEffect(() => localStorage.setItem('schedule', JSON.stringify(schedule)), [
    schedule,
  ]);

  const handleSubmit = (values, actions) => {
    console.log('Submitted');
    setSchedule(values);
    actions.setSubmitting(false);
    history.push('/order/garments');
  };

  const schema = Yup.object().shape({
    pickupDate: Yup.string().required('Please choose a pickup date.'),
    pickupTime: Yup.number().required('Please choose a pickup time.'),
    returnDate: Yup.string().required('Please choose a return date.'),
    returnTime: Yup.number().required('Please choose a return time.'),
    hotel: Yup.string().required('Please choose a hotel.'),
    room: Yup.string().required('Please choose a room.'),
  });

  const enhancedChildren = (submitForm, isSubmitting) =>
    React.Children.map(children, child => {
      return React.cloneElement(child, {
        submitScheduleForm: submitForm,
        isSubmittingScheduleForm: isSubmitting,
      });
    });

  return (
    <Formik
      initialValues={initialState}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      {({ submitForm, values }) => (
        <ScheduleContext.Provider
          value={{
            schedule,
            submitForm,
            values,
          }}>
          {children}
        </ScheduleContext.Provider>
      )}
    </Formik>
  );
};
