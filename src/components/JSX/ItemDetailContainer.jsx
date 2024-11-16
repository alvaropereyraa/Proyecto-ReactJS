import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import '../CSS/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const obtenerItem = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(datos => setItem(datos));
    };

    obtenerItem();
  }, [id]);

  return (
    item && (
      <div className="item-detail-overlay">
        <div className="item-detail-container">
          <ItemDetail item={item} />
        </div>
      </div>
    )
  );
};

export default ItemDetailContainer;
