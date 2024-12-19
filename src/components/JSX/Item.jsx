import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Item.css';
import '../CSS/ItemDetail.css';

const Item = ({ item }) => {
  return (
    <div className="card">
      <img src={item.imagen} alt={item.nombre} className="card-img" />
      <h2>{item.nombre}</h2>
      <p>{item.descripción}</p> {/* Muestra la descripción */}
      <p>Precio: {item.precio}</p>
      <div className="quantity-controls">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <Link to={`/item/${item.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
