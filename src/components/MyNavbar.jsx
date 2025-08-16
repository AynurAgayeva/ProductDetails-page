import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

function MyNavbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "az" ? "en" : "az");
  };
  return (
    <div> 
      
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">My website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">{t("home")}</Nav.Link>
            <Nav.Link as={NavLink} to= "/about">{t("about")}</Nav.Link>
          <Nav.Link as={NavLink} to="/products">{t("products")}</Nav.Link>
          <Nav.Link as={NavLink}  to="/contact">{t("contact")}</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>

          <button onClick={toggleTheme}>
        {theme === "light" ? " Dark Mode" : " Light Mode"}
      </button>

      
          <button onClick={toggleLanguage} style={{margin: "10px"}}>
        {t("changeLang")}
      </button>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyNavbar