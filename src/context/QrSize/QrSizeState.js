import React, { useState } from "react";
import QrSizeContext from "./QrSizeContext";
import { default_qrcode_size } from "../../constants";

export default function QrSizeState(props) {
  const [qrSize, setQrSize] = useState(default_qrcode_size);

  return (
    <QrSizeContext.Provider value={{ qrSize, setQrSize }}>
      {props.children}
    </QrSizeContext.Provider>
  );
}
