import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../CSS/Navbar.css';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar-custom">
      <div className="logo-contenedor" onClick={() => navigate('/')}>
        <img src="/images/logo.jpg" alt="logo" className="logo" />
      </div>
      <div className="titulos">
        <NavLink to="/" className="nav-link-custom" activeClassName="active">Inicio</NavLink>
        <NavLink to="/categoria/sin-evolucionar" className="nav-link-custom" activeClassName="active">Sin evolucionar</NavLink>
        <NavLink to="/categoria/evolucionado" className="nav-link-custom" activeClassName="active">Evolucionado</NavLink>
      </div>
      <div className="carrito-contenedor">
        <img 
          src="/images/carrito.png" 
          alt="carrito" 
          className="cart-icon" 
          onClick={() => navigate('/cart')} 
        />
      </div>
    </nav>
  );
}

export default NavBar;