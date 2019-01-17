import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from '../../components/Loading';
import NotFound from '../../components/NotFound';
import Schedule from '../Schedule/Schedule';

const Order = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>TOPBAR HERE</div>
      <Switch>
        <Route exact path="/order/schedule" component={Schedule} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Order;
