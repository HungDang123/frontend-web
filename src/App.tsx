import React from "react";
import "./App.css";
import Navbar from "./layouts/header_footer/Navbar";
import HomePage from "./layouts/homepages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FurnitureDetail from "./layouts/detailProduct/FurnitureDetail";
import Footer from "./layouts/header_footer/Footer";
import Shop from "./layouts/shop/List";
import Cart from "./layouts/Cart/Cart";
import Checkout from "./layouts/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/furniture/:productId" element={<FurnitureDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
