import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { QRCodeCanvas } from "qrcode.react";
import Heading from "../Headings/Heading";
import QrValueContext from "../../context/QrValue/QrValueContext";
import QrSizeContext from "../../context/QrSize/QrSizeContext";
import { ReactComponent as CloseSVG } from "../../assets/xmark-solid.svg";
import { default_qrcode_size } from "../../constants";

export default function Modal(props) {
  // Reference to the main modal
  const modalRef = useRef();

  // Getting Qrcode Value and Size using context api
  const { qrValue } = useContext(QrValueContext);
  const { qrSize, setQrSize } = useContext(QrSizeContext);

  // This function will close the modal if user clicked outside the modal
  const handleModalWrapperClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      props.setModalVisible(false);
    }
  };

  // This function will close the modal if user click close btn in the modal
  const handleCloseBtnClick = () => {
    props.setModalVisible(false);
  };

  // This function will reset the qrcode size to the defult qrcode size
  const handleResetBtnClick = () => {
    setQrSize(default_qrcode_size);
  };

  return (
    // The wrapper for the main modal which is spread all over the screen and if click is on it other than the modal container then the modal will close
    <ModalWrapper onClick={handleModalWrapperClick}>
      <ModalContainer ref={modalRef}>  {/* The main modal container */}
        {/* The close icon will be shown at the top right of the modal container */}
        <CloseBtn title="Close modal" onClick={handleCloseBtnClick}><CloseIcon /></CloseBtn>

        {/* The heading which will be shown at the left side */}
        <Heading title="Resize Your QR-Code" />

        {/* A divider will be shown which is of full width to seperate the header from the main content */}
        <Divider />

        {/* The Size input slider and its label */}
        <Label htmlFor="size-slider">Select size
          <span title="1mm = 3.77px"> (pixels)</span>
        </Label>
        <Slider
          max={500}
          min={50}
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
          type="range"
          name="size-slider"
        />

        {/* A row below the slider */}
        <SizeActions>
          {/* This is button which will reset the qrcode size */}
          <ResetBtn title="Reset qr-code size" onClick={handleResetBtnClick}>Reset</ResetBtn>

          {/* This will show the current qrcode size */}
          <SizeValue>
            <span>Size</span>
            <span>{qrSize}</span>
          </SizeValue>
        </SizeActions>

        {/* This is a live representation of the qrcode with the given size */}
        <QrWrapper>
          <QRCodeCanvas
            style={{ height: `${qrSize}px`, width: `${qrSize}px` }}
            size={qrSize}
            includeMargin={true}
            value={qrValue}
          />
        </QrWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
}

const QrWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);
`;
const ModalContainer = styled.div`
  background-color: white;
  width: 90%;
  height: 90%;
  padding: 1.5rem;
  border: 2px solid black;
  border-radius: 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  overflow: scroll;

  @media only screen and (min-width: 600px) {
    height: 80%;
    width: 80%;
  }
`;
const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  float: right;
  background-color: white;
`;
const CloseIcon = styled(CloseSVG)`
  height: 2rem;
  width: 2rem;

  &:hover {
    transform: scale(1.07);
    transition: 0.5s ease;
  }
`;
const Divider = styled.hr`
  height: 4px;
  width: 100%;
  border: 0;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-color: black;
`;
const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
`;
const Slider = styled.input`
  display: block;
  height: 10px;
  width: 100%;
  border: solid 1px #000000;
  border-radius: 8px;
  outline: none;
  margin-top: 0.3rem;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  background: ${(props) =>
    "linear-gradient(to right, #000000 0%, #000000 " +
    ((props.value - props.min) / (props.max - props.min)) * 100 +
    "%, #fff " +
    ((props.value - props.min) / (props.max - props.min)) * 100 +
    "%, white 100%)"};
`;
const SizeActions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;

  @media only screen and (min-width: 460px) {
    flex-direction: row;
  }
`;
const ResetBtn = styled.button`
  color: white;
  background-color: black;
  height: 2.5rem;
  min-width: 10rem;
  padding: 0.8rem 2rem;
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 1px;
`;
const SizeValue = styled.div`
  display: flex;
  height: 2.5rem;
  min-width: 10rem;
  border: 2px solid black;
  border-radius: 15px;
  overflow: hidden;

  span {
    display: grid;
    place-items: center;
    width: 50%;
  }

  span:first-child {
    color: white;
    background-color: black;
  }
`;

Modal.propTypes = {
  setModalVisible: PropTypes.func.isRequired,
};
