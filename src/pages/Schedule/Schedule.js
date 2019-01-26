import dayjs from 'dayjs';
import { Field, Form } from 'formik';
import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components/macro';
import DoubleRadio from '../../components/FieldGroup/DoubleRadio';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import Bottombar from '../Order/Bottombar';
import hotels from './hotels';

const date1 = dayjs(Date.now()).date();

const date2 = dayjs(Date.now())
  .add(1, 'day')
  .date();

const date3 = dayjs(Date.now())
  .add(1, 'day')
  .date();

const date4 = dayjs(Date.now())
  .add(2, 'day')
  .date();

const Schedule = props => {
  return (
    <>
      <PageTitle>Where are we going?</PageTitle>
      <PageInstructions>
        We will pick your garments up after the selected pickup time and return
        them before the selected return time.
      </PageInstructions>
      <Container>
        <StyledForm>
          <PoseGroup>
            <Div key="1">
              <DoubleRadio
                val1={date1}
                val2={date2}
                label="Pickup Date"
                name="pickupDate"
              />
            </Div>
            <Div key="2">
              <DoubleRadio
                val1={date3}
                val2={date4}
                label="Return Date"
                name="returnDate"
              />
              <Field component={FieldGroup} name="returnTime" radio />
            </Div>
            <Div key="3">
              <Field component={FieldGroup} name="hotel" select>
                <option value="" disabled />
                {hotels.map(hotel => (
                  <option key={hotel} value={hotel}>
                    {hotel}
                  </option>
                ))}
              </Field>
              <Field component={FieldGroup} name="room" />
            </Div>
          </PoseGroup>
          <Bottombar schedule {...props} />
        </StyledForm>
      </Container>
    </>
  );
};

export default Schedule;

const Div = posed.div({
  enter: { y: '0px', opacity: 1 },
  exit: { y: '20px', opacity: 0 },
});

const StyledForm = styled(Form)`
  max-width: 450px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
