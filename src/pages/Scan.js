import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QrReader from "react-qr-scanner";
import PageContainer from "../components/Containers/PageContainer";
import QrResultDialog from "../components/QrResultDialog";
import ReScanBtn from "../components/ReScanBtn";
import ScannerLoader from "../components/ScannerLoader";
import Heading from "../components/Headings/Heading";
import {isMobile} from 'react-device-detect';
import { toast } from "react-toastify";

export default function Scan() {
  const [result, setResult] = useState(null);
  const [scannerErr, setScannerErr] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleOnScan = (res) => {
    if (res !== null) {
      toast.success("Scanning Completed")
      setResult(res.text);
    }
  };
  const handleOnLoad = () => {
    toast('🦄 Show the qrcode infront of the camera', {
      position: "top-center",
      hideProgressBar: false,
    });
    setScannerErr(null);
    setLoading(false);
  };
  const handleOnError = (err) => {
    let message = null;
    if (err.message === "Permission denied") {
      message = "Please enable camera permission to scan qrcodes";
    } else if (err.message === "Requested device not found"){
      message = "No camera found to scan qrcodes"
    }
    toast.error(message);
    setScannerErr(message);
    setLoading(true);
  };

  return (
    <PageContainer>
      <>
        {!result ? (
          <>
            <Heading title="Scan QR-Code" />
            {!scannerErr ? (
              <ScannerWrapper>
                {loading && <ScannerLoader />}
                <QrReader
                  delay={500}
                  style={{ maxWidth: "100%"}}
                  onError={handleOnError}
                  onScan={handleOnScan}
                  onLoad={handleOnLoad}
                  constraints={
                    isMobile
                    ? { video: { facingMode: { exact: `environment` }}}
                    : undefined
                  }


                />
              </ScannerWrapper>
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

const ScannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin: "auto";
`;
const ErrText = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
`;
