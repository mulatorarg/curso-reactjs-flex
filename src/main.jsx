import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorContainer from './components/ErrorContainer.jsx';
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import NavBar from './components/NavBar.jsx';
import Cart from "./components/Cart.jsx";
import CheckOut from "./components/Checkout.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";

import './styles/main.css'

const router = createBrowserRouter([
  { path: "/", element: <ItemListContainer />, },
  { path: "/cart", element: <Cart />, },
  { path: "/checkout", element: <CheckOut />, },
  { path: "/product/:id", element: <ItemDetailContainer />, },
  { path: "/category/:categoryName?", element: <ItemListContainer />, },
  { path: "*", element: <ErrorContainer />, },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <CartContextProvider>
      <NavBar />
      <div className="container pb-2">
        <RouterProvider router={router} />
      </div>
    </CartContextProvider>
);
