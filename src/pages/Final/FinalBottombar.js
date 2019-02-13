import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { Button } from '../../components/UI';
import { GarmentsContext } from '../../contexts/Garments';
import { ScheduleContext } from '../../contexts/Schedule';

const FinalBottombar = ({
  history,
  submitForm,
  values,
  isSubmitting,
  cardComplete,
}) => {
  const garmentsContext = useContext(GarmentsContext);
  const scheduleContext = useContext(ScheduleContext);

  let disabled = true;

  if (
    scheduleContext.schedule.pickupDate &&
    scheduleContext.schedule.pickupHour &&
    scheduleContext.schedule.returnDate &&
    scheduleContext.schedule.returnHour &&
    scheduleContext.schedule.hotel &&
    scheduleContext.schedule.room &&
    garmentsContext.garments.length &&
    values.name &&
    values.email &&
    values.phone &&
    cardComplete &&
    !isSubmitting
  ) {
    disabled = false;
  }

  return (
    <>
      <Bar>
        <Container>
          <SubmitButton type="button" onClick={submitForm} disabled={disabled}>
            Finish
          </SubmitButton>
        </Container>
      </Bar>
      <Spacer />
    </>
  );
};

export default FinalBottombar;

const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgb(236, 239, 245);
  z-index: 10;

  @media (min-width: 1000px) {
    height: 6rem;
  }
`;

const Spacer = styled.div`
  height: 5rem;
  width: 100%;
  @media (min-width: 1000px) {
    height: 6rem;
  }
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 60%;

  @media (min-width: 500px) {
    width: 40%;
  }

  @media (min-width: 1000px) {
    width: 25%;
  }
`;

const SubmitButton = styled(Button)`
  background-color: ${props => (props.disabled ? '#c0e3ea' : null)};

  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  :hover {
    background-color: ${props => (props.disabled ? '#c0e3ea' : null)};
  }
`;
