import React, { Suspense } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Landing from './pages/Landing/Landing';
import { Switch, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Providers from './Providers';

const Order = React.lazy(() => import('./pages/Order/Order'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const App = () => {
  return (
    <>
      <Providers>
        <GlobalStyle />
        <Suspense fallback={Loading}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/order" render={props => <Order {...props} />} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Suspense>
      </Providers>
    </>
  );
};

export default App;
