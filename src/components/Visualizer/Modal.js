import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";
import { default_qrcode_size } from "../../constants";
import Divider from "../Divider";
import Heading from "../Headings/Heading";
import { ReactComponent as CloseSVG } from "./xmark-solid.svg";

export default function Modal(props) {
  const modalRef = useRef();

  const handleModalWrapperClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      props.setModalVisible(false);
    }
  };
  const handleCloseBtnClick = () => {
    props.setModalVisible(false);
  };
  const handleResetBtnClick = () => {
    props.setQrSize(default_qrcode_size);
  };

  return (
    <ModalWrapper onClick={handleModalWrapperClick}>
      <ModalContainer ref={modalRef}>
        <CloseBtn onClick={handleCloseBtnClick}>
          <CloseIcon />
        </CloseBtn>
        <Heading title="Resize Your QR-Code" />

        <Divider />

        <Label htmlFor="size-slider">
          Select size
          <span title="1mm = 3.77px"> (pixels)</span>
        </Label>
        <Slider
          max={300}
          min={100}
          value={props.qrSize}
          onChange={(e) => props.setQrSize(e.target.value)}
          type="range"
          name="size-slider"
        />

        <SizeActions>
          <ResetBtn onClick={handleResetBtnClick}>Reset</ResetBtn>
          <SizeValue>
            <span>Size</span>
            <span>{props.qrSize}</span>
          </SizeValue>
        </SizeActions>
      </ModalContainer>
    </ModalWrapper>
  );
}

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
  qrValue: PropTypes.string.isRequired,
  qrSize: PropTypes.number.isRequired,
  setQrSize: PropTypes.func.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};
