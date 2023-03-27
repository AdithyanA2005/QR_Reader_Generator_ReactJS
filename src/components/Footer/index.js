import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterText
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.linkedin.com/in/adithyan-a-26b2161b3/"
      >
        Created By Adithyan A
      </FooterText>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-top: 1.5px solid black;
  transform: translateY(100%);
`;
const FooterText = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 6px;
  font-size: 1.5rem;
  font-family: "Amatic SC", cursive;
`;