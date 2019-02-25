import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import 'babel-polyfill';

const rootElement = document.getElementById('root');

// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <BrowserRouter>
//       <Route component={App} />
//     </BrowserRouter>,
//     rootElement,
//   );
// } else {
render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  rootElement,
);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
