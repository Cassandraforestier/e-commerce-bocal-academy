import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Home } from "./pages/home/home";
import { Layout } from "./pages/layout/layout";
import { ProductDetail } from "./pages/productDetail/product";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ProductList } from "./pages/productList/productList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
