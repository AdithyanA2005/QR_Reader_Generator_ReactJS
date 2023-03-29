import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import styled from "styled-components";
import PageContainer from "../components/Containers/PageContainer";
import GeneratorInput from "../components/GeneratorInput";
import Heading from "../components/Headings/Heading";
import SubHeading from "../components/Headings/SubHeading";
import QrBgWarningQuote from "../components/QrBgWarningQuote";
import Visualizer from "../components/Visualizer";
import { default_qrcode_size } from "../constants";

export default function Generate() {
  const [qrValue, setQrValue] = useState("");
  const [qrSize, setQrSize] = useState(200);

  const handleDownloadBtnClick = () => {
    const qr_canvas = document.getElementById("qr-canvas");
    var link = document.createElement("a");
    link.download = "adiqr-qrcode.png";
    link.href = qr_canvas.toDataURL("image/png");
    link.click();
    link.remove();
  };

  return (
    <>
      <PageContainer>
        <Heading title="Generate QR-Code" />
        <GeneratorInput value={qrValue} setValue={setQrValue} />

        <SubHeading title="Download QR-Code" />
        <QrBgWarningQuote />

        <DownloadContainer>
          <QrWrapper>
            <QRCodeCanvas
              id="qr-canvas"
              size={default_qrcode_size}
              includeMargin={true}
              value={qrValue}
            />
          </QrWrapper>

          <ActionWrapper>
            <Visualizer qrValue={qrValue} qrSize={qrSize} setQrSize={setQrSize} />
            <DownloadButton onClick={handleDownloadBtnClick}>
              Download your QR-Code
            </DownloadButton>
          </ActionWrapper>
        </DownloadContainer>
      </PageContainer>
    </>
  );
}

const DownloadContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;
const QrWrapper = styled.div`
  box-sizing: content-box;
  height: 200px;
  width: 200px;
  border: 2px solid black;
  margin: auto;
`;
const ActionWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: space-around;
`;
const DownloadButton = styled.button`
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 1.2rem;
  letter-spacing: 1px;
  padding: 1.2rem 3rem;
  border: 0;
  border-radius: 10px;
`;
