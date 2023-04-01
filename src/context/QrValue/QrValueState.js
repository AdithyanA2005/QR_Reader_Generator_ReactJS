import React, { useState } from "react";
import QrValueContext from "./QrValueContext";

export default function QrValueState(props) {
  const [qrValue, setQrValue] = useState("");

  return (
    <QrValueContext.Provider value={{ qrValue, setQrValue }}>
      {props.children}
    </QrValueContext.Provider>
  );
}
