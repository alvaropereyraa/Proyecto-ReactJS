import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../../firebase/db';
import { CartContext } from '../JSX/context/CartContext';
import '../CSS/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerItem = async () => {
      const producto = await getProduct(id);
      if (producto) {
        setItem(producto);
      }
    };

    obtenerItem();
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail-overlay">
      <div className="item-detail">
        <img src={item.imagen} alt={item.nombre} className="item-detail-img" />
        <h2>{item.nombre}</h2>
        <p>{item.description}</p>
        <p>Precio: {item.precio}</p>
        <div className="quantity-controls">
          <button className="sumar" onClick={() => addToCart({ ...item, precio: Number(item.precio), quantity: 1 })}>
            Añadir al Carrito
          </button>
        </div>
        <button className="volver-inicio" onClick={() => navigate('/')}>Volver al Inicio</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
