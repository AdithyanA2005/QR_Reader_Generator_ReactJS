import React, { useEffect, useState } from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import validator from "validator";
import PropTypes from "prop-types";
import { ReactComponent as CopySVG } from "../../assets/copy-solid.svg";
import { ReactComponent as LinkSVG } from "../../assets/link-solid.svg";
import { toast } from "react-toastify";

export default function QrResultDialog(props) {
  // State defining whether the result is a valid url or not
  const [isValidURL, setIsValidURL] = useState(false);

  // This function will copyt the result text to the users clipboard and will show a toast
  const handleCopyToClipboard = () => {
    copy(props.text);
    toast("🦄 Copied To Clipboard");
  };

  // This function will be used to open the result of type url in a new tab
  const handleOpenLinkInNewTab = () => {
    let url = props.text;

    // If the url doesn't start with http/https then when the url is opened in a new tab it will be opened as a route of this website. To fix this adding http/https at the start will help
    if (!props.text.startsWith("https") || !props.text.startsWith("http"))
      url = `https://${props.text}`;

    // Open the url in a new tab
    window.open(url, "_blank", "noreferrer");
  };

  // This will check whether the passed result is a url or not and update the state
  useEffect(() => setIsValidURL(validator.isURL(props.text)), [props.text]);

  return (
    <Wrapper>
      {/* Heading of the result box */}
      <ResultHeading>QR-Code content</ResultHeading>

      <Container>
        {/* The result text */}
        <Text>{props.text}</Text>

        {/* This will be visible on container hover and will contain the copy and open buttons */}
        <Actions>
          {/* Copy Btn */}
          <ActionBtn title="Copy to clipboard" onClick={handleCopyToClipboard}>
            <CopySVG />
            <span>Copy</span>
          </ActionBtn>

          {/* Open Btn: only shown if it is a valid url */}
          {isValidURL && (
            <ActionBtn title="Open link in new tab" onClick={handleOpenLinkInNewTab}>
              <LinkSVG />
              <span>Open</span>
            </ActionBtn>
          )}
        </Actions>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  overflow: hidden;
`;
const ResultHeading = styled.div`
  color: white;
  background-color: black;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  padding: 0.3rem 0.75rem;
  transition: 0.3s ease;
  overflow: hidden;

  &:hover {
    div {
      // Setting Visiblitity of ActionBtn
      transform: translateX(0);
    }
  }
`;
const Text = styled.p`
  font-size: 1rem;
  letter-spacing: 1px;
  padding-left: 0.45rem;
`;
const Actions = styled.div`
  box-sizing: content-box;
  position: absolute;
  right: 0;
  display: flex;
  gap: 0.75rem;
  padding-right: 0.75rem;
  transition: 0.3s ease;
  transform: translateX(100%);
`;
const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  cursor: pointer;
  min-width: 2.5rem;
  border: 0;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  svg {
    fill: rgba(0, 0, 0, 0.6);
    height: 2.5rem;
    width: 2.5rem;
    padding: 0.7rem;
    transition: 0.5s ease-in-out;
  }

  span {
    width: 0;
    padding-left: 0;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    font-weight: 550;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: left;
    overflow: hidden;
    transition: 0.5s ease-in-out;
  }

  &:hover {
    background-color: #f5f5f5;

    svg {
      transform: scale(1.05);
    }

    span {
      box-sizing: content-box;
      width: 3rem;
      padding-right: 0.7rem;
    }
  }
`;

QrResultDialog.propTypes = {
  text: PropTypes.string.isRequired,
};
