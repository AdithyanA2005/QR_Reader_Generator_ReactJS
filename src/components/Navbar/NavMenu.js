import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
  // Links to different pages in the website
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Scan", url: "/scan" },
    { title: "Generate", url: "/generate" },
  ];

  return (
    <NavMenuWrapper>
      {navLinks.map((navLink, index) => (
        <NavItem key={index} to={navLink.url}>
          {navLink.title}
        </NavItem>
      ))}
    </NavMenuWrapper>
  );
}

const NavMenuWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const NavItem = styled(NavLink)`
  color: #221f1f;
  font-size: 1.1rem;
  position: relative;
  padding: 0.4rem 0.5rem;
  border-radius: 5px;

  &:before {
    content: "";
    position: absolute;
    background-color: black;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 50%;
    border-radius: 5px;
    transform: translateX(-50%);
    transition: 0.3s;
    z-index: -1;
  }

  &:hover:before {
    width: 100%;
  }

  &.active {
    color: white;

    &:before {
      width: 100%;
      height: 100%;
    }
  }
`;
