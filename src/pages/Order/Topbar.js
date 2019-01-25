import React from 'react';
import styled from 'styled-components/macro';
import {
  faClock,
  faTshirt,
  faCreditCard,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as PressExpress } from '../../assets/img/pressexpresslogo.svg';
import StepItem from '../../components/StepItems';

const Topbar = ({ location }) => {
  return (
    <>
      <Div>
        <Logo>
          <PressExpress />
        </Logo>
        <Steps>
          <StepItem
            text="Schedule"
            icon={faClock}
            pathname={location.pathname}
            route="/order/schedule"
          />
          <StepItem
            text="Garments"
            icon={faTshirt}
            pathname={location.pathname}
            route="/order/garments"
          />
          <StepItem
            text="Review"
            icon={faThumbsUp}
            pathname={location.pathname}
            route="/order/review"
          />
          <StepItem
            text="Final"
            icon={faCreditCard}
            last
            pathname={location.pathname}
            route="/order/final"
          />
        </Steps>
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

const Steps = styled.div`
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
