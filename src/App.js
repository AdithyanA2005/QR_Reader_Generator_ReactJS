import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Generate from "./pages/Generate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/generate" element={<Generate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
