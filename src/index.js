import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App/App';
import './index.css';

const theme = {
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
