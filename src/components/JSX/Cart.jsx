import React, { useContext, useState } from 'react';
import { CartContext } from '../JSX/context/CartContext';
import '../CSS/Cart.css';

const Cart = () => {
  const { cart, getTotal, clearCart, finalizarCompra, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const [compraDetalles, setCompraDetalles] = useState(null);

  const handleFinalizarCompra = async () => {
    const idCompra = await finalizarCompra();
    setCompraDetalles({ idCompra, items: cart, total: getTotal() });
  };

  const handleAceptar = () => {
    setCompraDetalles(null);
  };

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imagen} alt={item.nombre} className="cart-item-img" />
              <h2>{item.nombre}</h2>
              <p>Precio: {item.precio}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: {item.precio * item.quantity}</p>
              <div className="cart-item-controls">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <h2>Total: {getTotal()}</h2>
          <div className="cart-buttons">
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
          </div>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
      {compraDetalles && (
        <div className="compra-detalles-overlay">
          <div className="compra-detalles">
            <h2>Detalles de la Compra</h2>
            <p>ID de la compra: {compraDetalles.idCompra}</p>
            <p>Total: {compraDetalles.total}</p>
            <div className="compra-items">
              {compraDetalles.items.map((item, index) => (
                <div key={index} className="compra-item">
                  <img src={item.imagen} alt={item.nombre} className="compra-item-img" />
                  <h3>{item.nombre}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: {item.precio}</p>
                </div>
              ))}
            </div>
            <button className="aceptar-compra" onClick={handleAceptar}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
