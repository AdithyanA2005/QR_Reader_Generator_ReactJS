import React, { useState } from "react";
import styled from "styled-components";
import QrReader from "react-qr-scanner";
import PageContainer from "../components/PageContainer";
import QrResultDialog from "../components/QrResultDialog";
import ReScanBtn from "../components/ReScanBtn";
import ScannerLoader from "../components/ScannerLoader";
import Heading from "../components/Headings/Heading";
import { isMobile } from "react-device-detect";
import { toast } from "react-toastify";

export default function Scan() {
  // The state which will store the qrcode value after scanning it
  const [result, setResult] = useState(null);

  // The state which will store any errors occured during scanning
  const [scannerErr, setScannerErr] = useState(null);

  // The state will turn false when camera starts
  const [loading, setLoading] = useState(true);

  // This state will turn false after the first scan try occured
  const [isFirstScan, setIsFirstScan] = useState(true);

  // The function will handle the qrcode scanning
  const handleOnScan = (res) => {
    // This will show a toast just when scanning starts
    if (isFirstScan) {
      toast("🦄 Show the qrcode infront of the camera", {
        position: "top-center",
        hideProgressBar: false,
      });
      setIsFirstScan(false);
    }

    // This will set result to the qrcode value when scanning is successfull
    if (res !== null) {
      toast.success("Scanning Completed");
      setResult(res.text);
    }
  };

  // This function will be executed when the Qrcode scanner is loaded
  const handleOnLoad = () => {
    setLoading(false);
    setScannerErr(null);
  };

  // This function will be executed if any scanning error occurs
  const handleOnError = (err) => {
    let message = null;
    if (err.message === "Permission denied")
      message = "Please enable camera permission to scan qrcodes";
    else if (err.message === "Requested device not found")
      message = "No camera found to scan qrcodes";

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
                  style={{ maxWidth: "100%" }}
                  onError={handleOnError}
                  onScan={handleOnScan}
                  onLoad={handleOnLoad}
                  constraints={
                    isMobile
                      ? { video: { facingMode: { exact: `environment` } } }
                      : undefined
                  }
                />
              </ScannerWrapper>
            ) : (
              <ErrText>
                {`${scannerErr}, Fix the issue to start scanning or try refreshing the website`}{" "}
              </ErrText>
            )}
          </>
        ) : (
          <>
            {/* This will show the result of the qrcode and the user will be able to copy that result and if the result is a url then the user will be able to open it in a new tab */}
            <QrResultDialog text={result} />
            <ReScanBtn setResult={setResult} />
          </>
        )}
      </>
    </PageContainer>
  );
}

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
