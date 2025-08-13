import React from "react";
import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import { ProductsProvider } from "./context/ProductsContext";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <ProductsProvider>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
      </ProductsProvider>
    </div>
  );
}

export default App;
