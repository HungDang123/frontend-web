import React from "react";
import "./App.css";
import Navbar from "./layouts/header_footer/Navbar";
import HomePage from "./layouts/homepages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FurnitureDetail from "./layouts/detailProduct/FurnitureDetail";
import Footer from "./layouts/header_footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/furniture/:productId" element={<FurnitureDetail/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
