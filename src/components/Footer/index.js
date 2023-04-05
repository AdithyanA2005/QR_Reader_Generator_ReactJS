import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterWrapper>
      {/* Link which will open my linkedin profile in a new tab */}
      <FooterText
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.linkedin.com/in/adithyana2005"
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
  text-align: center;
  font-size: 1.5rem;
  font-family: "Amatic SC", cursive;
`;
