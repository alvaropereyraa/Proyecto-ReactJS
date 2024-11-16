import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 
import '../CSS/Navbar.css';

function NavBar() {
  return (
    <Navbar className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo-contenedor">
          <img src="/images/logo.jpg" alt="logo" className="logo" />
        </Navbar.Brand>
        <Nav className="titulos">
          <Nav.Link as={Link} to="/" className="nav-link-custom">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/category/sin-evolucionar" className="nav-link-custom">Sin evolucionar</Nav.Link>
          <Nav.Link as={Link} to="/category/evolucionado" className="nav-link-custom">Evolucionado</Nav.Link>
        </Nav>
        <div className="carrito-contenedor">
          <CartWidget />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
