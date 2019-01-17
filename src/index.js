import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import { StripeProvider } from 'react-stripe-elements';

import theme from './styles/theme';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
          <App />
        </StripeProvider>
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
