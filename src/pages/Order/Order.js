import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../../components/NotFound';
import Schedule from '../Schedule/Schedule';
import Topbar from './Topbar';

const Order = () => {
  return (
    <>
      <Topbar />
      <Switch>
        <Route exact path="/order/schedule" component={Schedule} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Order;
