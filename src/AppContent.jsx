import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import MyNavbar from "./components/MyNavbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

export default function AppContent() {
  const { theme } = useContext(ThemeContext);

    

  return (
    <div className={`app ${theme}`}>
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
    </div>
  );
}
