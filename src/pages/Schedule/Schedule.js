import { Field, Form } from 'formik';
import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components/macro';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import Bottombar from '../Order/Bottombar';
import hotels from './hotels';

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
              <Field component={FieldGroup} name="pickupDate" doubleRadio />
              <Field component={FieldGroup} name="pickupTime" radio />
            </Div>
            <Div key="2">
              <Field component={FieldGroup} name="returnDate" doubleRadio />
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
