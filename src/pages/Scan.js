import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import PageContainer from "../components/Containers/PageContainer";
import QrResultDialog from "../components/QrResultDialog";
import ReScanBtn from "../components/ReScanBtn";
import Heading from "../components/Headings/Heading";
import { toast } from "react-toastify";

export default function Scan() {
  const [result, setResult] = useState(null);

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
              onLoad={handleOnLoad}
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

