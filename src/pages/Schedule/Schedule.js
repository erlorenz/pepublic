import { Field, Form } from 'formik';
import React, { useContext } from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components/macro';
import Bottombar from '../../components/Bottombar';
import DoubleRadio from '../../components/FieldGroup/DoubleRadio';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import RadioGroup from '../../components/FieldGroup/RadioGroup';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import { ScheduleContext } from '../../contexts/Schedule';
import {
  pickupDate,
  pickupTimes,
  returnDate,
  returnTimes,
} from '../../utils/customerTimes';
import hotels from './hotels';

const Schedule = props => {
  const context = useContext(ScheduleContext);

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
                times={pickupDate()}
                label="Pickup Date"
                name="pickupDate"
              />
              <RadioGroup
                label="Pickup Time"
                name="pickupHour"
                times={pickupTimes(context.values.pickupDate) || []}
              />
            </Div>
            {context.values.pickupHour && (
              <Div key="2">
                <DoubleRadio
                  times={returnDate(context.values.pickupHour)}
                  label="Return Date"
                  name="returnDate"
                />
                <RadioGroup
                  label="Return Time"
                  name="returnHour"
                  times={
                    returnTimes(
                      context.values.returnDate,
                      context.values.pickupHour,
                    ) || []
                  }
                />
              </Div>
            )}
            <Div key="3">
              <Field component={FieldGroup} label="Hotel" name="hotel" select>
                <option value="" disabled />
                {hotels.map(hotel => (
                  <option key={hotel} value={hotel}>
                    {hotel}
                  </option>
                ))}
              </Field>
              <Field component={FieldGroup} label="Room" name="room" />
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
