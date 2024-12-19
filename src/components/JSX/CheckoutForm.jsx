import React, { useState } from "react";
import "../CSS/CheckoutForm.css";

const CheckoutForm = ({ onFormChange }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "nombre") setNombre(value);
    if (id === "email") {
      setEmail(value);
      if (!value.includes("@")) {
        setEmailError("El correo electrónico debe contener un '@'.");
      } else {
        setEmailError("");
      }
    }
    if (id === "direccion") setDireccion(value);
    onFormChange({ nombre, email, direccion });
  };

  return (
    <div className="checkout-form-container">
      <form className="checkout-form" id="checkout-form">
        <h3>Información de la Compra</h3>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
