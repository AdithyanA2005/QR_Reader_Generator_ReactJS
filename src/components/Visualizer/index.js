import React, { useState } from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import Modal from "./Modal";

export default function Visualizer(props) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      {modalVisible && (
        <Modal
          setModalVisible={setModalVisible}
          qrValue={props.qrValue}
          qrSize={props.qrSize}
          setQrSize={props.setQrSize}
        />
      )}
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
