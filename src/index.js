import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ThemProvider } from './provider/ThemeProvider';

import App from './App';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemProvider>
        <App />
      </ThemProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);