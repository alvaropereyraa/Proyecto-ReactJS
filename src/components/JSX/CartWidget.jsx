import React from "react";
import "../CSS/Navbar.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src="/images/carrito.png" alt="carrito" className="cart-icon" />
      <span className="carrito-notificacion">0</span> 
    </div>
  );
};

export default CartWidget;
