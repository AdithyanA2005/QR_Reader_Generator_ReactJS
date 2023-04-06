import React, { useContext } from "react";
import styled from "styled-components";
import { QRCodeCanvas } from "qrcode.react";
import PageContainer from "../components/PageContainer";
import GeneratorInput from "../components/GeneratorInput";
import Heading from "../components/Headings/Heading";
import SubHeading from "../components/Headings/SubHeading";
import QrBgWarningQuote from "../components/QrBgWarningQuote";
import Visualizer from "../components/Visualizer";
import QrValueContext from "../context/QrValue/QrValueContext";
import QrSizeContext from "../context/QrSize/QrSizeContext";
import downloadSVG from "../assets/download-solid.svg";
import { default_qrcode_size } from "../constants";

export default function Generate() {
  // The QrValue and QrSize contexts
  const { qrValue } = useContext(QrValueContext);
  const { qrSize } = useContext(QrSizeContext);

  // This function will download the generated qrcode
  const handleDownloadBtnClick = () => {
    const qr_canvas = document.getElementById("qr-canvas");
    const link = document.createElement("a");
    link.download = "adiqr-qrcode.png";
    link.href = qr_canvas.toDataURL("image/png");
    link.click();
    link.remove();
  };

  // This function will scroll a bit and take us to the download section
  const handleGeneratorBtnClick = () => {
    window.scrollTo(0, 200);
  };

  return (
    <PageContainer>
      <Heading title="Generate QR-Code" />
      <GeneratorInput handleSubmitBtnClick={handleGeneratorBtnClick} />

      <SubHeading title="Download QR-Code" />
      <QrBgWarningQuote />

      <DownloadContainer>
        {/* The qrcode preview */}
        <QrWrapper default_size={default_qrcode_size}>
          <QRCodeCanvas
            id="qr-canvas"
            size={qrSize}
            includeMargin={true}
            value={qrValue}
          />

          {/* Qr-Preview download button cover */}
          <DownloadCover>
            <CoverDownloadBtn title="Download qr-code"/>
          </DownloadCover>
        </QrWrapper>

        {/* Action btns to change qr-code size and download qr-code */}
        <ActionWrapper>
          {/* Visualizer modal with trigger Btn */}
          <Visualizer />

          {/* Qr-code download button */}
          <DownloadButton onClick={handleDownloadBtnClick}>
            Download your QR-Code
          </DownloadButton>
        </ActionWrapper>
      </DownloadContainer>
    </PageContainer>
  );
}

const DownloadContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;
const QrWrapper = styled.div`
  position: relative;
  display: flex;
  box-sizing: content-box;
  height: ${(props) => props.default_size}px;
  width: ${(props) => props.default_size}px;
  border: 2px solid black;
  margin: auto;

  canvas {
    height: 100% !important;
    width: 100% !important;
  }

  &:hover {
    /* DownloadCover */
    div {
      inset:0;
      border-radius: 0;
    }
  }
`;
const DownloadCover = styled.div`
  position: absolute;
  inset: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 300%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  transition: 1s ease;
`;
const CoverDownloadBtn = styled.button`
  height: 25%;
  width: 25%;
  cursor: pointer;
  border: 0;
  background-color: rgba(255, 255, 255, 0.8);
  mask-image: url(${downloadSVG});
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
