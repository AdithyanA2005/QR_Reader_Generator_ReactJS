import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import QrReader from "react-qr-scanner";
import PageContainer from "../components/Containers/PageContainer";
import QrResultDialog from "../components/QrResultDialog";
import ReScanBtn from "../components/ReScanBtn";

export default function Scan() {
  const delay = 500;
  const videoStreamCSS = {
    height: "auto",
    width: "100%",
  };

  const [result, setResult] = useState("Hlelo");

  const handleOnScan = (data) => {
    if (data != null) {
      console.log(data)
      setResult(data.text)
    }
  };
  const handleOnError = (err) => {
    console.error(err)
  };

  return (
    <PageContainer>
      <>
        {!result ? (
          <QrReader
            delay={delay}
            style={videoStreamCSS}
            onError={handleOnError}
            onScan={handleOnScan}
          />
        ) : (
          <>
            <ReScanBtn setResult={setResult}/>
            <QrResultDialog text={"https://youtube.com"} />
          </>
        )}
      </>
    </PageContainer>
  );
};

