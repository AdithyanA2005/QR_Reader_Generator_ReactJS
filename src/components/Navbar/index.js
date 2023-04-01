import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <NavWrapper id="navbar">
      <NavContainer>
        <NavBrand>
          <NavLink to="/">AdiQR</NavLink>
        </NavBrand>
        <NavMenu />
      </NavContainer>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 100;
  background-color: white;
  width: 100%;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
`;
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  @media only screen and (min-width: 1024px) {
    max-width: 85%;
    margin: auto;
  }

  @media only screen and (min-width: 460px) {
    flex-direction: row;
  }
`;
const NavBrand = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-size: 1.75rem;
`;
