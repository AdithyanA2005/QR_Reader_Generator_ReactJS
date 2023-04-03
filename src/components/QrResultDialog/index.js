import React from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import PropTypes from "prop-types";
import { ReactComponent as CopySVG } from "../../assets/copy-solid.svg";
import { toast } from "react-toastify";
export default function QrResultDialog(props) {
  const handleCopyToClipboard = () => {
    copy(props.text);
    toast("🦄 Copied To Clipboard")
  }

  return (
    <Wrapper>
      <Text>{props.text}</Text>
      <Actions>
        <ActionBtn onClick={handleCopyToClipboard}><CopySVG /></ActionBtn>
      </Actions>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  padding: 0.3rem 0.75rem;
  border: 2px solid black;
  border-radius: 15px;
  transition: 0.3s ease;

  &:hover {
    // Setting Visiblitity of ActionBtn
    div {
      display: flex;
    }
  }
`
const Text = styled.p`
  font-size: 1rem;
  letter-spacing: 1px;
`
const Actions = styled.div`
  display: none;
  gap: 0.75rem;
`
const ActionBtn = styled.button` 
  background-color: black;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  border: 0;
  border-radius: 10px;
  padding: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  svg {
    fill: white;
  }

  &:hover {
    svg {
      transform: scale(1.05);
    }
  }
`

QrResultDialog.propTypes = {
  text: PropTypes.string.isRequired,
}
