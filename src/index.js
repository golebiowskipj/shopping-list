import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

const theme = {
  colorPrimary: '#eee',
  colorPrimaryDarker: '#ccc',
  colorPos: '#b6e9d1',
  colorNeg: '#ffbb43',
  fontFamily: '"Montserrat", sans-serif',
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
