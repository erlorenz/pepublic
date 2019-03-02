import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { GarmentsContext } from '../contexts/Garments';
import { ScheduleContext } from '../contexts/Schedule';
import { Button } from './UI';

const Bottombar = ({
  history,
  garments,
  schedule,
  review,
  final,
  submitForm,
  values,
}) => {
  const garmentsContext = useContext(GarmentsContext);
  const scheduleContext = useContext(ScheduleContext);

  if (final) return null;

  let backLocation, nextLocation, disabled;

  if (schedule) {
    const incomplete = () => {
      if (
        values.pickupDate &&
        values.pickupHour &&
        values.returnDate &&
        values.returnHour &&
        values.hotel &&
        values.room
      )
        return false;

      return true;
    };

    backLocation = '/';
    nextLocation = '/order/garments';
    disabled = incomplete();
  }

  if (garments) {
    backLocation = '/order/schedule';
    nextLocation = '/order/review';
    disabled = !garmentsContext.garments.length;
  }

  if (review) {
    const incomplete = () => {
      if (
        scheduleContext.schedule.pickupDate &&
        scheduleContext.schedule.pickupHour &&
        scheduleContext.schedule.returnDate &&
        scheduleContext.schedule.returnHour &&
        scheduleContext.schedule.hotel &&
        scheduleContext.schedule.room &&
        garmentsContext.garments.length
      )
        return false;

      return true;
    };

    backLocation = '/order/garments';
    nextLocation = '/order/final';
    disabled = incomplete();
  }

  const goBack = () => history.push(backLocation);
  const goNext = () => {
    if (schedule || review) {
      submitForm();
    } else {
      history.push(nextLocation);
    }
  };

  return (
    <>
      <ForwardAndBack>
        <Container>
          <BackButton type="button" onClick={goBack}>
            <SpanLeft>{'<'}</SpanLeft>Back
          </BackButton>
          <ForwardButton type="button" onClick={goNext} disabled={disabled}>
            Next <SpanRight>></SpanRight>
          </ForwardButton>
        </Container>
      </ForwardAndBack>
    </>
  );
};

export default Bottombar;

const ForwardAndBack = styled.div`
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
  font-size: 0.8rem;

  @media (min-width: 1000px) {
    height: 6rem;
  }
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 60%;

  @media (min-width: 500px) {
    width: 50%;
  }

  @media (min-width: 1000px) {
    width: 30%;
  }
`;

const ForwardButton = styled(Button)`
  background-color: ${props => (props.disabled ? '#c0e3ea' : null)};

  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  :hover {
    background-color: ${props => (props.disabled ? '#c0e3ea' : null)};
  }
  :active {
    background-color: #c0e3ea;
  }
`;

const BackButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.buttonColor};
  border: 1px solid ${props => props.theme.buttonColor};

  :hover {
    background-color: #00000012;
  }
`;

const SpanLeft = styled.span`
  margin-right: 0.3rem;
`;

const SpanRight = styled.span`
  margin-left: 0.3rem;
`;
