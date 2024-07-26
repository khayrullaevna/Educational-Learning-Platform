import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SidebarProvider } from "./context/sidebar_context";
import { CoursesProvider } from "./context/courses_context";
import { CartProvider } from "./context/cart_context";
import { FavoriteProvider } from "./context/favorite_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CoursesProvider>
      <CartProvider>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </CartProvider>
    </CoursesProvider>
);
