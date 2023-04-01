import React from "react";
import styled from "styled-components";

export default function Divider() {
  return <Hr />;
}

const Hr = styled.hr`
  height: 4px;
  width: 100%;
  border: 0;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-color: black;
`;
