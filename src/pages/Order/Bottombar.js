import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { Button } from '../../components/UI';
import { GarmentsContext } from '../../contexts/Garments';
import { darken } from 'polished';

const Bottombar = ({ location, history }) => {
  const garmentsContext = useContext(GarmentsContext);
  //   const scheduleContext = useContext(ScheduleContext);

  if (location.pathname === '/order/final') return null;

  let backLocation, nextLocation, disabled;

  if (location.pathname === '/order/schedule') {
    backLocation = '/';
    nextLocation = '/order/garments';
    disabled = false;
    console.log('Schedule Match');
  }

  if (location.pathname === '/order/garments') {
    backLocation = '/order/schedule';
    nextLocation = '/order/final';
    disabled = !garmentsContext.garments.length;
    console.log('Garment match');
  }

  const goBack = () => history.push(backLocation);
  const goNext = () => history.push(nextLocation);

  if (location.pathname === '/order/review') {
    backLocation = '/order/garments';
    nextLocation = '/order/final';
    //   disabled = scheduleContext.
  }

  return (
    <ForwardAndBack>
      <Container>
        <BackButton onClick={goBack}>Back</BackButton>
        <ForwardButton onClick={goNext} disabled={disabled}>
          Continue
        </ForwardButton>
      </Container>
    </ForwardAndBack>
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
`;

const BackButton = styled(Button)`
  background-color: #0000000d;
  color: ${props => props.theme.textColor};

  :hover {
    background-color: #00000012;
  }
`;