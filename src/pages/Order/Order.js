import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import { StripeProvider } from 'react-stripe-elements';

import NotFound from '../../components/NotFound';
import Schedule from '../Schedule/Schedule';
import Garments from '../Garments/Garments';
import Final from '../Final/Final';
import Success from '../Success/Success';
import Topbar from './Topbar';
import { GarmentsProvider } from '../../contexts/Garments';
import Bottombar from './Bottombar';
import posed from 'react-pose';

const Order = props => {
  const RoutesContainer = posed.div({
    enter: { opacity: 1, delay: 2000 },
    exit: { opacity: 0, delay: 3000 },
  });

  return (
    <>
      <Topbar location={props.location} />
      <Main>
        <GarmentsProvider>
          <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
            <RoutesContainer key={props.location.key}>
              <Switch location={props.location}>
                <Route
                  exact
                  path="/order/schedule"
                  component={Schedule}
                  key="1"
                />
                <Route
                  exact
                  path="/order/garments"
                  component={Garments}
                  key="2"
                />
                <Route exact path="/order/final" component={Final} key="3" />
                <Route
                  exact
                  path="/order/success"
                  component={Success}
                  key="4"
                />
                <Route component={NotFound} key="5" />
              </Switch>
            </RoutesContainer>
          </StripeProvider>
          <Bottombar {...props} />
        </GarmentsProvider>
      </Main>
    </>
  );
};

export default Order;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  background-color: ${props => props.theme.backgroundColor};

  @media (min-width: 1000px) {
    padding: 1.8rem;
  }
`;
