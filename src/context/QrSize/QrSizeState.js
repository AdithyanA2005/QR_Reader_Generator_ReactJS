import React, { useState } from "react";
import QrSizeContext from "./QrSizeContext";

export default function QrSizeState(props) {
  const [qrSize, setQrSize] = useState("");

  return (
    <QrSizeContext.Provider value={{ qrSize, setQrSize }}>
      {props.children}
    </QrSizeContext.Provider>
  );
}
