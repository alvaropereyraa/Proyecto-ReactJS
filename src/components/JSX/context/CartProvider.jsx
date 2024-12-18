import React, { useState } from 'react';
import { CartContext } from './CartContext';
import { registrarCompra } from '../../../firebase/db';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + (item.quantity * item.precio), 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const finalizarCompra = async () => {
    const compra = {
      items: cart,
      total: getTotal(),
      date: new Date()
    };

    const idCompra = await registrarCompra(compra);
    clearCart();
    return idCompra;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, getQuantity, getTotal, clearCart, finalizarCompra }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
