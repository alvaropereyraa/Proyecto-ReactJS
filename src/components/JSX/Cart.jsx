import React, { useContext, useState } from "react";
import { CartContext } from "../JSX/context/CartContext";
import CheckoutForm from "./CheckoutForm";
import "../CSS/Cart.css";
import Swal from "sweetalert2";

const Cart = ({ onClose }) => {
  const {
    cart,
    getTotal,
    clearCart,
    finalizarCompra,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);
  const [compraDetalles, setCompraDetalles] = useState(null);
  const [formData, setFormData] = useState({ nombre: '', email: '', direccion: '' });

  const handleFinalizarCompra = async () => {
    if (!formData.nombre || !formData.email || !formData.direccion || !formData.email.includes('@')) {
      Swal.fire({
        title: "Error",
        text: "Por favor complete el formulario de compra correctamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    const idCompra = await finalizarCompra();
    Swal.fire({
      title: "Compra Finalizada",
      text: `Tu compra ha sido completada con éxito.`,
      icon: "success",
      confirmButtonText: "Aceptar"
    }).then(() => {
      setCompraDetalles({ idCompra, items: cart, total: getTotal() });
      clearCart();
    });
  };

  const handleFormChange = (updatedFormData) => {
    setFormData(updatedFormData);
  };

  const handleAceptar = () => {
    setCompraDetalles(null);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart">
          <h1>Carrito de Compras</h1>
          {cart.length > 0 ? (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="cart-item-img"
                  />
                  <h2 className="nombre-compra">{item.nombre}</h2>
                  <p>Precio: {item.precio}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Subtotal: {item.precio * item.quantity}</p>
                  <div className="cart-item-controls">
                    <button
                      className="restar"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="sumar"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="eliminar"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
              <h2>Total: {getTotal()}</h2>
              <CheckoutForm onFormChange={handleFormChange} />
              <div className="cart-buttons">
                <button className="vaciar" onClick={clearCart}>
                  Vaciar Carrito
                </button>
                <button className="finalizar" onClick={handleFinalizarCompra}>
                  Finalizar Compra
                </button>
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
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="compra-item-img"
                      />
                      <h3>{item.nombre}</h3>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Precio: {item.precio}</p>
                    </div>
                  ))}
                </div>
                <button className="aceptar-compra" onClick={handleAceptar}>
                  Aceptar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
