import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import { StripeProvider } from 'react-stripe-elements';

import NotFound from '../../components/NotFound';
import Schedule from '../Schedule/Schedule';
import Garments from '../Garments/Garments';
import Final from '../Checkout/Checkout';
import Success from '../Success/Success';
import Topbar from './Topbar';

const Order = () => {
  return (
    <>
      <Topbar />
      <Spacer />
      <Main>
        <Switch>
          <Route exact path="/order/schedule" component={Schedule} />
          <Route exact path="/order/garments" component={Garments} />
          <Route exact path="/order/checkout" component={Final} />
          <Route exact path="/order/success" component={Success} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
};

export default Order;

const Spacer = styled.div`
  width: 100%;
  height: 3rem;

  @media (min-width: 1000px) {
    height: 4rem;
  }
`;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  background-color: ${props => props.theme.backgroundColor};

  @media (min-width: 1000px) {
    padding: 1.8rem;
  }
`;
