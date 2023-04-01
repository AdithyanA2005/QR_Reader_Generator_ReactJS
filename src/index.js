import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import QrValueState from "./context/QrValue/QrValueState";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QrValueState>
      <App />
    </QrValueState>
  </React.StrictMode>
);
