/**
 * Digital Cipher Activity
 * @version 12.19.22
 * @author MrH-rezroll
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CaesarCipherModel from './model/CaesarCipherModel';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App cipherModel={new CaesarCipherModel("Sla'z lujvkl zvtl alea dpao h Jhlzhy Jpwoly!", 7)} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
