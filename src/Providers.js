import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import { StripeProvider } from 'react-stripe-elements';
import ApolloClient from 'apollo-boost';

import theme from './styles/theme';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
});

const Providers = props => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
            {props.children}
          </StripeProvider>
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default Providers;
