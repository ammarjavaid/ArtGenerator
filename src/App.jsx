import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import GenerateImage from "./pages/GenerateImage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateImage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
