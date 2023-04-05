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
      {/* Navbar of the website */}
      <Navbar />

      {/* The Contents of each page will be replced by the Outlet tag */}
      <Main><Outlet /></Main>

      {/* Footer of the website */}
      <Footer />
      
      {/* This will show the react-toastify toast */}
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
