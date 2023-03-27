import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

const Main = styled.main`
  flex: 1;
  height: 100%;
`;
