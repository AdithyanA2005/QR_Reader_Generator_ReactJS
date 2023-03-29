import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export default function TextInput(props) {
  const goBtnOnClickHandle  = () => {
    window.scrollBy(0, 160);
  }

  return (
    <ValueInputWrapper>
      <Input type="text" placeholder="Enter QR-Code Value" value={props.value} onChange={(e) => props.setValue(e.target.value)} />
      <GoBtn onClick={goBtnOnClickHandle}>Go</GoBtn>
    </ValueInputWrapper>
  );
}

const Input = styled.input`
  flex: 1;
  border: 0;
  outline: none;
  padding: 1rem 0.75rem; 
  font-size: 1.1rem;
  letter-spacing: 1px;
`;
const ValueInputWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid black;
  border-radius: 15px;
  background-color: red;
  overflow: hidden;
`;
const GoBtn = styled.button`
  color: white;
  background-color: black;
  border: 0;
  padding: 0 1.1rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
`;

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
