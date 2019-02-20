import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import * as Yup from 'yup';
import Bottombar from '../../components/Bottombar';
import DoubleRadioSchedule from '../../components/FieldGroup/DoubleRadioSchedule';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import RadioGroup from '../../components/FieldGroup/RadioGroup';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import { ScheduleContext } from '../../contexts/Schedule';
import { fadeInSlow } from '../../styles/transitions';
import {
  pickupDate,
  pickupTimes,
  returnDate,
  returnTimes,
} from '../../utils/customerTimes';
import hotels from './hotels';

const schema = Yup.object().shape({
  pickupDate: Yup.string().required('Please choose a pickup date.'),
  pickupHour: Yup.number().required('Please choose a pickup time.'),
  returnDate: Yup.string().required('Please choose a return date.'),
  returnHour: Yup.number().required('Please choose a return time.'),
  hotel: Yup.string().required('Please choose a hotel.'),
  room: Yup.string().required('Please choose a room.'),
});

const Schedule = props => {
  const context = useContext(ScheduleContext);

  const handleSubmit = (values, actions) => {
    try {
      context.setSchedule(values);
      actions.setSubmitting(false);
      props.history.push('/order/garments');
    } catch (e) {
      console.log(e.message);
    }
  };

  const fadeIn = useSpring(fadeInSlow);

  return (
    <>
      <PageTitle>Where are we going?</PageTitle>
      <PageInstructions>
        We will pick your garments up after the selected pickup time and return
        them before the selected return time. (All times are in Pacific Time)
      </PageInstructions>
      <Container style={fadeIn}>
        <Formik
          initialValues={
            context.schedule || {
              pickupDate: '',
              pickupHour: '',
              returnDate: '',
              returnHour: '',
              hotel: '',
              room: '',
            }
          }
          validationSchema={schema}
          onSubmit={handleSubmit}>
          {({ submitForm, values, ...formikProps }) => (
            <StyledForm>
              <Div key="1">
                <DoubleRadioSchedule
                  times={pickupDate()}
                  label="Pickup Date"
                  name="pickupDate"
                  values={values}
                  formikProps={formikProps}
                />
                {/* <RadioGroup
                  label="Pickup Time"
                  name="pickupHour"
                  times={pickupTimes(values.pickupDate) || []}
                  values={values}
                  formikProps={formikProps}
                />
              </Div>
              <Div key="2">
                <DoubleRadioSchedule
                  times={returnDate(values.pickupHour) || ''}
                  label="Return Date"
                  name="returnDate"
                  values={values}
                  formikProps={formikProps}
                />
                <RadioGroup
                  label="Return Time"
                  name="returnHour"
                  times={
                    returnTimes(values.returnDate, values.pickupHour) || []
                  }
                  values={values}
                  formikProps={formikProps}
                /> */}
              </Div>
              <Div key="3">
                <Field
                  component={FieldGroup}
                  label="Hotel/Casino"
                  name="hotel"
                  select
                  values={values}
                  formikProps={formikProps}>
                  <option value="" disabled />
                  {hotels.map(hotel => (
                    <option key={hotel} value={hotel}>
                      {hotel}
                    </option>
                  ))}
                </Field>
                <Field
                  component={FieldGroup}
                  label="Room/Suite"
                  name="room"
                  values={values}
                  formikProps={formikProps}
                />
              </Div>
              <Bottombar
                schedule
                values={values}
                submitForm={submitForm}
                {...props}
              />
            </StyledForm>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Schedule;

const Div = animated.div;

const StyledForm = styled(Form)`
  max-width: 450px;
`;
const Container = animated(styled.div`
  display: flex;
  justify-content: center;
`);
