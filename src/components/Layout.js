import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  flex: 1;
  margin-top: 107px;

  @media only screen and (min-width: 460px) {
    margin-top: 67px;
  }
`;
