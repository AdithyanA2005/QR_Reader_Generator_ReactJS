import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { default_qrcode_size } from "../../constants";
import { ReactComponent as ResetSVG } from "../../assets/rotate-solid.svg";

export default function Buttons(props) {
  const handleResetBtnClick = () => props.setQrSize(default_qrcode_size);
  const handleVisualizeBtnClick = () => props.setModalVisible(true);

  return (
    <ButtonsWrap>
      <VisualizeBtn onClick={handleVisualizeBtnClick}>
        Visualise Size: {props.qrSize}
      </VisualizeBtn>
      <ResetBtn onClick={handleResetBtnClick}>
        <ResetIcon />
      </ResetBtn>
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
  cursor: pointer;
  border: 0;
  padding: 0 0.75rem;
`;
const ResetIcon = styled(ResetSVG)`
  width: 1.6rem;
  &:hover {
    transform: scale(1.05);
  }
`;

Buttons.propTypes = {
  qrSize: PropTypes.number.isRequired,
  setQrSize: PropTypes.func.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};
