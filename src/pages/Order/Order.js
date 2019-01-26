import React from 'react';
import posed from 'react-pose';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import NotFound from '../../components/NotFound';
import { GarmentsProvider } from '../../contexts/Garments';
import { ScheduleProvider } from '../../contexts/Schedule';
import Final from '../Final/Final';
import Garments from '../Garments/Garments';
import Schedule from '../Schedule/Schedule';
import Success from '../Success/Success';
import Topbar from './Topbar';

const Order = props => {
  const RoutesContainer = posed.div({
    enter: { opacity: 1, delay: 2000 },
    exit: { opacity: 0, delay: 3000 },
  });

  return (
    <>
      <ScheduleProvider history={props.history}>
        <GarmentsProvider>
          <Topbar location={props.location} />
          <Main>
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
              <Route exact path="/order/success" component={Success} key="4" />
              <Route component={NotFound} key="5" />
            </Switch>
          </Main>
        </GarmentsProvider>
      </ScheduleProvider>
    </>
  );
};

export default Order;

const PoseContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

const Main = styled(PoseContainer)`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  background-color: ${props => props.theme.backgroundColor};

  @media (min-width: 1000px) {
    padding: 1.8rem;
  }
`;
