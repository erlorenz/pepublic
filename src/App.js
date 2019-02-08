import ApolloClient from 'apollo-boost';
import React, { Suspense } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';
import styled, { ThemeProvider } from 'styled-components/macro';
import Loading from './components/Loading';
import Landing from './pages/Landing/Landing';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const Order = React.lazy(() => import('./pages/Order/Order'));
const NotFound = React.lazy(() => import('./components/NotFound'));

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
});

const App = ({ location }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
          <>
            <GlobalStyle />
            <Suspense fallback={<CenterLoading />}>
              <Switch location={location}>
                <Route exact path="/" component={Landing} key="1" />
                <Route
                  path="/order"
                  render={props => <Order {...props} />}
                  key="2"
                />
                <Route render={props => <NotFound {...props} />} key="3" />
              </Switch>
            </Suspense>
          </>
        </StripeProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;

const CenterLoading = styled(Loading)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.backgroundColor};
`;
