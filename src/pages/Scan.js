import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import QrReader from "react-qr-scanner";
import PageContainer from "../components/Containers/PageContainer";
import QrResultDialog from "../components/QrResultDialog";
import ReScanBtn from "../components/ReScanBtn";
import Heading from "../components/Headings/Heading";

export default function Scan() {
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
          <>
            <Heading title="Scan QR-Code" />
            <QrReader
              delay={500}
              style={{ maxWidth: "100%", border: "2px solid black" }}
              onError={handleOnError}
              onScan={handleOnScan}
            />
          </>
        ) : (
          <>
            <ReScanBtn setResult={setResult} />
            <QrResultDialog text={result} />
          </>
        )}
      </>
    </PageContainer>
  );
};

