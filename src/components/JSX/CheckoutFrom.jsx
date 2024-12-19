import React, { useState } from "react";
import "../CSS/CheckoutForm.css";
import Swal from "sweetalert2";

const CheckoutForm = ({ onFormSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && email && direccion) {
      onFormSubmit({ nombre, email, direccion });
    } else {
      Swal.fire({
        title: "Error",
        text: "Por favor complete todos los campos",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <form className="checkout-form" id="checkout-form" onSubmit={handleSubmit}>
      <h3>Información de la Compra</h3>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
    </form>
  );
};

export default CheckoutForm;
