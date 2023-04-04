import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function ReScanBtn(props) {
  const handleButtonClick = () => props.setResult(null);

  return (
    <Button onClick={handleButtonClick}>
      Rescan QR-Code
    </Button>
  );
};

const Button = styled.button`
  color: white;
  background-color: black;
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 15px;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

ReScanBtn.propTypes = {
  setResult: PropTypes.func.isRequired,
};
