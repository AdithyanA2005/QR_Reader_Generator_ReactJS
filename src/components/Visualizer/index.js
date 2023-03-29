import React, { useState } from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons";

export default function Visualizer(props) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <>
      <Buttons
        setModalVisible={setModalVisible}
        qrSize={props.qrSize}
        setQrSize={props.setQrSize}
      />
    </>
  );
}

Visualizer.propTypes = {
  qrValue: PropTypes.string.isRequired,
  qrSize: PropTypes.number.isRequired,
  setQrSize: PropTypes.func.isRequired,
};
