import React, { useState } from "react";
import Buttons from "./Buttons";
import Modal from "./Modal";

export default function Visualizer(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {modalVisible && <Modal setModalVisible={setModalVisible} />}
      <Buttons setModalVisible={setModalVisible} />
    </>
  );
}
