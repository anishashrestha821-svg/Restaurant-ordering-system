import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./index.css";

// This is the very first file that runs.
// 1. BrowserRouter turns on React Router, so we can have multiple "pages".
// 2. CartProvider shares the order/cart data with every page and component
//    that needs it, without us passing props down manually every time.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
