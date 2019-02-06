import {
  faClock,
  faCreditCard,
  faThumbsUp,
  faTshirt,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components/macro';
import { ReactComponent as PressExpress } from '../../assets/img/pressexpresslogo.svg';
import StepItem from '../../components/StepItem';

const Topbar = ({ location }) => {
  return (
    <>
      <Div>
        <Logo>
          <PressExpress />
        </Logo>
        <PoseGroup>
          <Steps key="steps">
            <PosedStepItem
              text="Schedule"
              icon={faClock}
              pathname={location.pathname}
              route="/order/schedule"
              key="1"
            />
            <PosedStepItem
              text="Garments"
              icon={faTshirt}
              pathname={location.pathname}
              route="/order/garments"
              key="2"
            />
            <PosedStepItem
              text="Review"
              icon={faThumbsUp}
              pathname={location.pathname}
              route="/order/review"
              key="3"
            />
            <PosedStepItem
              text="Final"
              icon={faCreditCard}
              last
              pathname={location.pathname}
              route="/order/final"
              key="4"
            />
          </Steps>
        </PoseGroup>
      </Div>
      <Spacer />
    </>
  );
};

export default Topbar;

const Div = styled.div`
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

const PosedSteps = posed.div({
  enter: { opacity: 1, staggerChildren: 200, animateOnMount: true },
  exit: { opacity: 0 },
});

const Steps = styled(PosedSteps)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b5b5b5;
`;

const Spacer = styled.div`
  width: 100%;
  height: 4rem;

  @media (min-width: 1000px) {
    height: 5rem;
  }
`;

const PosedStepItem = posed(StepItem)({
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
});
