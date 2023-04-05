import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import QrSizeContext from "../../context/QrSize/QrSizeContext";
import { ReactComponent as ResetSVG } from "../../assets/rotate-solid.svg";
import { default_qrcode_size } from "../../constants";

export default function Buttons(props) {
  // The size of the qrcode from context
  const { qrSize, setQrSize } = useContext(QrSizeContext);

  // These will handle the btn clicks
  const handleResetBtnClick = () => setQrSize(default_qrcode_size);
  const handleVisualizeBtnClick = () => props.setModalVisible(true);

  // The Vizualize btn and the reset size btn will be shown as a single row
  return (
    <ButtonsWrap>
      {/* This will open the vizualizer modal */}
      <VisualizeBtn title="Open visualizer modal" onClick={handleVisualizeBtnClick}>Visualise Size: {qrSize}</VisualizeBtn>

      {/* This will set the qrcode size back to original */}
      <ResetBtn title="Reset qr-code size" onClick={handleResetBtnClick}><ResetIcon /></ResetBtn>
    </ButtonsWrap>
  );
}

const ButtonsWrap = styled.div`
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
`;
const VisualizeBtn = styled.button`
  flex: 1;
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 1.2rem;
  letter-spacing: 1px;
  padding: 1.2rem 3rem;
  border: 0;
`;
const ResetBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  border: 0;
  width: 3rem;

  &:hover {
    transition: 0.1s ease;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
const ResetIcon = styled(ResetSVG)`
  width: 100%;
  height: 100%;
  padding: 0 0.75rem;

  &:hover {
    transition: 0.1s ease;
    transform: scale(1.05);
  }
`;

Buttons.propTypes = {
  setModalVisible: PropTypes.func.isRequired,
};
