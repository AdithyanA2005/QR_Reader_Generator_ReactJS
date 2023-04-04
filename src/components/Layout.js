import React from "react";
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
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
