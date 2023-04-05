import React, { useState } from "react";
import Buttons from "./Buttons";
import Modal from "./Modal";

export default function Visualizer(props) {
  // State defining the modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* Shows modal if its visibility is set to true */}
      {modalVisible && <Modal setModalVisible={setModalVisible} />}

      {/* Show the modal buttons by default */}
      <Buttons setModalVisible={setModalVisible} />
    </>
  );
}
