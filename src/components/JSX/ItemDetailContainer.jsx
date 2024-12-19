import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../../firebase/db';
import { CartContext } from '../JSX/context/CartContext';
import ItemDetail from './ItemDetail';
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
      <ItemDetail item={item} addToCart={addToCart} navigate={navigate} /> 
    </div>
  );
};

export default ItemDetailContainer;
