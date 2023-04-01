import React, { useState } from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import Modal from "./Modal";

export default function Visualizer(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {modalVisible && (
        <Modal
          setModalVisible={setModalVisible}
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
  qrSize: PropTypes.number.isRequired,
  setQrSize: PropTypes.func.isRequired,
};
