import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import QrValueContext from "../../context/QrValue/QrValueContext";

export default function GenerateInput(props) {
  const { qrValue, setQrValue } = useContext(QrValueContext);

  return (
    <ValueInputWrapper>
      <Input
        type="text"
        placeholder="Enter QR-Code Value"
        value={qrValue}
        onChange={(e) => setQrValue(e.target.value)}
      />
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
