import React from "react";
import styled from "styled-components";

export default function QrBgWarningQuote() {
  return (
    <BlockQuote>
      <em>
        <b>NOTE:</b> Make sure to always use QR-Code in bright environment so
        that the blacks are clearly visible
      </em>
    </BlockQuote>
  );
}

const BlockQuote = styled.blockquote`
  color: rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.05);
  border-left: 4px solid black;
  padding: 1.5rem;

  b {
    color: black;
  }
`;
