import React, { useState } from "react";
import "./App.css";
import Navbar from "./layouts/header_footer/Navbar";
import HomePage from "./layouts/homepages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FurnitureDetail from "./layouts/detailProduct/FurnitureDetail";
import Footer from "./layouts/header_footer/Footer";
import product from "./models/Product";
import AccountOrder from "./layouts/account/AccountOrder";
import Wishlist from "./layouts/account/WishList";
import Shop from "./layouts/shop/List";
import Cart from "./layouts/Cart/Cart";
import Checkout from "./layouts/Checkout/Checkout";
import Login from "./layouts/Login/Login";

function App() {
  const [product, setProduct] = useState<product[]>([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar product={product} />
        <Routes>
          <Route
            path="/"
            element={<HomePage product={product} setProduct={setProduct} />}
          />
          <Route path="/furniture/:productId" element={<FurnitureDetail />} />
          <Route path="/account-orders" element={<AccountOrder />} />
          <Route path="/account-wishlist" element={<Wishlist />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
