import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { Card } from '../../components/UI';
import { ScheduleContext } from '../../contexts/Schedule';
import { fadeInSlow } from '../../styles/transitions';
import { getNow, getTime } from '../../utils/getDates';

const ReviewSchedule = ({ history }) => {
  const context = React.useContext(ScheduleContext);

  const clickHandler = () => history.push('/order/schedule');

  const fadeIn = useSpring(fadeInSlow);

  const description = unix => {
    const time = getTime(unix);
    if (time.date() === getNow().date()) return 'Today';
    if (time.date() - 1 === getNow().date()) return 'Tomorrow';
    if (time.date() - 2 === getNow().date()) return time.format('dddd');
    return '';
  };

  const pickupHr = context.schedule.pickupHour;

  const returnHr = context.schedule.returnHour;

  return (
    <Container onClick={clickHandler} style={fadeIn}>
      <Row>
        <Div1>Pickup:</Div1>
        <Div2>
          {`${description(pickupHr)}, ${getTime(pickupHr).month()}/${getTime(
            pickupHr,
          ).date()} after ${getTime(pickupHr).format('h:mm a')}`}
        </Div2>
      </Row>
      <Row>
        <Div1>Return:</Div1>
        <Div2>{`${description(returnHr)}, ${getTime(
          returnHr,
        ).month()}/${getTime(returnHr).date()} by ${getTime(returnHr).format(
          'h:mm a',
        )}`}</Div2>
      </Row>
    </Container>
  );
};

export default ReviewSchedule;

const Container = animated(styled(Card)`
  width: 100%;
  font-size: ${props => props.theme.listFontSize};
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 95px -30px;
  overflow-x: visible;
  cursor: pointer;
`);

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.4rem 0;

  :last-child {
    border-bottom: 1px solid lightgrey;
  }

  :first-child {
    border-top: 1px solid lightgrey;
  }
`;

const Div1 = styled.div`
  width: 20%;
  font-weight: 600;
`;

const Div2 = styled.div`
  width: 80%;
`;
