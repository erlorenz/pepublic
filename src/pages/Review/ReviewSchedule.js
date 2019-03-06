import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { Card } from '../../components/UI';
import { ScheduleContext } from '../../contexts/Schedule';
import { fadeInSlow } from '../../styles/transitions';
import { getTime } from '../../utils/getDates';

const ReviewSchedule = ({ history }) => {
  const context = React.useContext(ScheduleContext);

  const clickHandler = () => history.push('/order/schedule');

  const fadeIn = useSpring(fadeInSlow);

  const description = dt => {
    // console.log(dt.day);
    // if (dt.day === getNow().day) return 'Today';
    // if (dt.day - 1 === getNow().day) return 'Tomorrow';
    // if (dt.day - 2 === getNow().day) return dt.toFormat('EEEE');
    // if (dt.day !== getNow().day && dt.day === 1) return dt.toFormat('EEEE');
    if (dt.day) return dt.toFormat('EEEE');
    return '';
  };

  const pickupHr = getTime(context.schedule.pickupHour);

  const returnHr = getTime(context.schedule.returnHour);

  return (
    <Container onClick={clickHandler} style={fadeIn}>
      <Row>
        <Div1>Pickup:</Div1>
        <Div2>
          {`${description(pickupHr)}, ${pickupHr.month}/${
            pickupHr.day
          } after ${pickupHr.toFormat('h:mm a')} PST`}
        </Div2>
      </Row>
      <Row>
        <Div1>Return:</Div1>
        <Div2>{`${description(returnHr)}, ${returnHr.month}/${
          returnHr.day
        } by ${returnHr.toFormat('h:mm a')} PST`}</Div2>
      </Row>
      <Row>
        <Div1>Hotel:</Div1>
        <Div2>{context.schedule.hotel}</Div2>
      </Row>
      <Row>
        <Div1>Room:</Div1>
        <Div2>{context.schedule.room}</Div2>
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
