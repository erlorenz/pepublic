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

const Topbar = ({ location }) => {
  const divProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <Div style={divProps}>
        <Logo>
          <PressExpress />
        </Logo>
        <Steps>
          <StepItem
            text="Schedule"
            icon={faClock}
            pathname={location.pathname}
            route="/order/schedule"
            key="1"
          />
          <StepItem
            text="Garments"
            icon={faTshirt}
            pathname={location.pathname}
            route="/order/garments"
            key="2"
          />
          <StepItem
            text="Review"
            icon={faThumbsUp}
            pathname={location.pathname}
            route="/order/review"
            key="3"
          />
          <StepItem
            text="Final"
            icon={faCreditCard}
            last
            pathname={location.pathname}
            route="/order/final"
            key="4"
          />
        </Steps>
      </Div>
      <Spacer style={divProps} />
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

const Logo = styled.div`
  position: absolute;
  left: 0;
  width: 190px;
  padding-left: 2rem;
  display: none;

  @media (min-width: 800px) {
    display: block;
  }
`;

const Steps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b5b5b5;
`;

const Spacer = styled(animated.div)`
  width: 100%;
  height: 4rem;

  @media (min-width: 1000px) {
    height: 5rem;
  }
`;
