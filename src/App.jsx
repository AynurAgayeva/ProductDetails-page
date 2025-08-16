import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ProductsProvider } from "./context/ProductsContext";
import AppContent from "./AppContent";
import "./i18n";

export default function App() {


  return (
    <ThemeProvider>
      <ProductsProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ProductsProvider>
    </ThemeProvider>
  );
}
