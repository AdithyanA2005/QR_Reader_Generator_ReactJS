import React from "react";
import ReactDOM from "react-dom/client";
import QrValueState from "./context/QrValue/QrValueState";
import QrSizeState from "./context/QrSize/QrSizeState";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QrValueState>
      <QrSizeState>
        <App />
      </QrSizeState>
    </QrValueState>
  </React.StrictMode>
);
