import React from "react";
import "../CSS/Navbar.css";
import CartWidget from "./CartWidget";


export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="logo-contenedor">
        <img src="/images/logo.jpg" alt="logo"/>
        </li>
        <li className="carrito-contenedor">
          <img src="/images/carrito.png" alt="carrito" />
        </li>
        <li className="nav-links">
          <a href="/index.html">Inicio</a>
        </li>
        <li className="nav-links">
          <a href="/juegos.html">Juegos</a>
        </li>
        <li className="nav-links">
          <a href="/contacto.html">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

