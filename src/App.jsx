import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Details, Notfound, Cart } from "./pages/index";
import { ProductsProvider } from "./context/productsContext";
import { CartProvider } from "./context/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <ProductsProvider>
      <ToastContainer />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
