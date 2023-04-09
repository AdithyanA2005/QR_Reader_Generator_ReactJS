import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import QrValueContext from "../../context/QrValue/QrValueContext";

export default function GenerateInput(props) {
  // QrValue Context
  const { qrValue, setQrValue } = useContext(QrValueContext);  

  // Changes the QrValue state context as the input value changes
  const handleInputValueChange = (e) => setQrValue(e.target.value);  // Handle input value change

  // If the `Enter` key is pressed in the input then the submit button onclick function will be executed
  const handleInputOnKeyDown = (e) => { 
    if (e.key === "Enter") props.handleSubmitBtnClick();
  }

  return (
    <ValueInputWrapper>
      {/* This input will alter the qrcode value context */}
      <Input
        type="text"
        value={qrValue}
        placeholder="Enter QR-Code Value"
        onChange={handleInputValueChange}
        onKeyDown={handleInputOnKeyDown} 
      />

      {/* This button will have default text of `Go` and will take btn text and onclick func as prop*/}
      <GoBtn onClick={props.handleSubmitBtnClick}>{props.btnText}</GoBtn>
    </ValueInputWrapper>
  );
}

const ValueInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 2px solid black;
  border-radius: 15px;
  background-color: red;
  overflow: hidden;
`;
const Input = styled.input`
  flex: 1;
  border: 0;
  outline: none;
  padding: 1rem 0.75rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
`;
const GoBtn = styled.button`
  color: white;
  background-color: black;
  width: 100%;
  border: 0;
  padding: 0.5rem 1.1rem;
  cursor: pointer;
  font-size: 1.1rem;
  letter-spacing: 1px;

  @media only screen and (min-width: 650px) {
    width: auto;
  }
`;

GenerateInput.propTypes = {
  btnText: PropTypes.string,
  handleSubmitBtnClick: PropTypes.func.isRequired,
};

GenerateInput.defaultProps = {
  btnText: "Go",
};
