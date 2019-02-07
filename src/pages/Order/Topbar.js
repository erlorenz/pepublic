import {
  faClock,
  faCreditCard,
  faThumbsUp,
  faTshirt,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { ReactComponent as PressExpress } from '../../assets/img/pressexpresslogo.svg';
import StepItem from '../../components/StepItem';
import { fadeInSlow } from '../../styles/transitions';

const Topbar = ({ location }) => {
  const fadeIn = useSpring(fadeInSlow);

  const steps = [
    {
      text: 'Schedule',
      icon: faClock,
      route: '/order/schedule',
    },
    {
      text: 'Garments',
      icon: faTshirt,
      route: '/order/garments',
    },
    {
      text: 'Review',
      icon: faThumbsUp,
      route: '/order/review',
    },
    {
      text: 'Final',
      icon: faCreditCard,
      route: '/order/final',
      last: true,
    },
  ];

  const renderSteps = () => {
    return steps.map((step, index) => (
      <StepItem
        text={step.text}
        icon={step.icon}
        pathname={location.pathname}
        route={step.route}
        key={index}
        delay={index}
        last={step.last || false}
      />
    ));
  };

  return (
    <>
      <Div>
        <Logo style={fadeIn}>
          <PressExpress />
        </Logo>
        <Steps>{renderSteps()}</Steps>
      </Div>
      <Spacer />
    </>
  );
};

export default Topbar;

const Div = styled(animated.div)`
  height: 4rem;
  display: flex;
  background-color: white;
  border-bottom: 1px solid rgb(236, 239, 245);
  position: fixed;
  top: 3rem;
  left: 0;
  top: 0;
  width: 100vw;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media (min-width: 1000px) {
    height: 5rem;
  }
`;

const Logo = animated(styled.div`
  position: absolute;
  left: 0;
  width: 190px;
  padding-left: 2rem;
  display: none;

  @media (min-width: 800px) {
    display: block;
  }
`);

const Steps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b5b5b5;
`;

const Spacer = styled.div`
  width: 100%;
  height: 4rem;
  background-color: white;

  @media (min-width: 1000px) {
    height: 5rem;
  }
`;
