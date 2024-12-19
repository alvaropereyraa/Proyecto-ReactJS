import React, { useContext } from 'react';
import { CartContext } from '../JSX/context/CartContext';
import '../CSS/CartWidget.css';

const CartWidget = ({ onCartClick }) => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget" onClick={onCartClick}>
      <img src="/images/carrito.png" alt="carrito" className="cart-icon" />
      {getQuantity() > 0 && (
        <span className="cart-quantity">{getQuantity()}</span>
      )}
    </div>
  );
};

export default CartWidget;
