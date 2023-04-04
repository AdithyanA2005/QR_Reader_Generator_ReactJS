import React, { useState } from "react";
import styled from "styled-components";
import QrReader from "react-qr-scanner";
import PageContainer from "../components/Containers/PageContainer";
import QrResultDialog from "../components/QrResultDialog";
import ReScanBtn from "../components/ReScanBtn";
import Heading from "../components/Headings/Heading";
import { toast } from "react-toastify";

export default function Scan() {
  const [result, setResult] = useState(null);
  const [scannerErr, setScannerErr] = useState(null);

  const handleOnScan = (data) => {
    if (data != null) {
      console.log(data)
      setResult(data.text)
    }
  };
  const handleOnLoad = () => {
    toast('🦄 Show the qrcode infront of the camera', {
      position: "top-center",
      hideProgressBar: false,
    });
    setScannerErr(null);
  };
  const handleOnError = (err) => {
    let message = null;
    if (err.message === "Permission denied") {
      message = "Please enable camera permission to scan qrcodes";
    } else if (err.message === "Requested device not found"){
      message = "No camera found to scan qrcodes"
    }
    setScannerErr(message);
    toast.error(message)
  };

  return (
    <PageContainer>
      <>
        {!result ? (
          <>
            <Heading title="Scan QR-Code" />
            {!scannerErr ? (
              <QrReader
                delay={500}
                style={{ maxWidth: "100%", border: "2px solid black", margin: "auto", display: "block" }}
                onError={handleOnError}
                onScan={handleOnScan}
                onLoad={handleOnLoad}
              />
            ) : (
              <ErrText>{`${scannerErr}, Fix the issue to start scanning or try refreshing the website`} </ErrText>
            )}
          </>
        ) : (
          <>
            <QrResultDialog text={result} />
            <ReScanBtn setResult={setResult} />
          </>
        )}
      </>
    </PageContainer>
  );
};

const ErrText = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
`;
