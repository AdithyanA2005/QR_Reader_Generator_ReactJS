import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QrValueState from './context/QrValue/QrValueState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QrValueState>
      <App />
    </QrValueState>
  </React.StrictMode>
);
