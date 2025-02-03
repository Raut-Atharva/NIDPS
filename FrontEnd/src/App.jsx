import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ScanNetwork from "./pages/ScanNetwork";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/scan-network" element={<ScanNetwork />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
