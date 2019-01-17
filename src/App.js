import React, { Suspense } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Landing from './pages/Landing/Landing';
import { Switch, Route } from 'react-router-dom';
import Loading from './components/Loading';
import { ThemeProvider } from 'styled-components/macro';
import theme from './styles/theme';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter } from 'react-router-dom';

const Order = React.lazy(() => import('./pages/Order/Order'));
const NotFound = React.lazy(() => import('./components/NotFound'));

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <BrowserRouter>
          <Suspense fallback={Loading}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/order" render={props => <Order {...props} />} />
              <Route render={props => <NotFound {...props} />} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
};

export default App;
