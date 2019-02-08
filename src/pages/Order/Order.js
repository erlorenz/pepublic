import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import NotFound from '../../components/NotFound';
import { GarmentsProvider } from '../../contexts/Garments';
import { OptionsProvider } from '../../contexts/Review';
import { ScheduleProvider } from '../../contexts/Schedule';
import Final from '../Final/Final';
import Garments from '../Garments/Garments';
import Review from '../Review/Review';
import Schedule from '../Schedule/Schedule';
import Success from '../Success/Success';
import Topbar from './Topbar';

const Order = props => {
  return (
    <>
      <ScheduleProvider history={props.history}>
        <GarmentsProvider>
          <OptionsProvider>
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
                <Route exact path="/order/review" component={Review} key="3" />
                <Route exact path="/order/final" component={Final} key="4" />
                <Route
                  exact
                  path="/order/success"
                  component={Success}
                  key="5"
                />
                <Route component={NotFound} key="6" />
              </Switch>
            </Main>
          </OptionsProvider>
        </GarmentsProvider>
      </ScheduleProvider>
    </>
  );
};

export default Order;

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  background-color: ${props => props.theme.backgroundColor};

  @media (min-width: 1000px) {
    padding: 1.8rem;
  }
`;
