import React from 'react';
import ReactDOM from 'react-dom/client';
import './src/style.css';
import App from './src/app';

let element= document.createElement('div');
element.setAttribute("id", "root");
document.body.appendChild(element);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

