import React from 'react';
import ReactDOM from 'react-dom';
import ReactClient from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/bootstrap.scss";
import "./assets/fontAwesome/css/all.min.css";



const rootElm = document.getElementById('root');
const root = ReactClient.createRoot(rootElm);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
