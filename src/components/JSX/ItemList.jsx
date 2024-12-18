import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../JSX/context/CartContext';
import '../CSS/ItemList.css';

const ItemList = ({ items }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="item-list">
      {items.map((item, index) => (
        <div key={index} className="card">
          <img src={item.imagen} alt={item.nombre} className="card-img" />
          <h2>{item.nombre}</h2>
          <p>{item.descripcion}</p>
          <p>Precio: {item.precio}</p>
          <Link to={`/item/${item.id}`} className="detalle-boton">Ver Detalle</Link>
          <button className="añadir-al-carrito"  onClick={() => addToCart({ ...item, quantity: 1 })}>
            Añadir al Carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
