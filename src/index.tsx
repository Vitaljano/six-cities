import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';

import { offers } from './mocks/offers';

const root = document.getElementById('root') as HTMLElement;

render(
  <React.StrictMode>
    <App offers={offers} />
  </React.StrictMode>,
  root
);
