import React from 'react';
import '../CSS/ItemListContainer.css';

const ItemListContainer = ({prop}) => {
  return (
    <div className="prop-contenedor">
        <h1>{prop}</h1>
    </div>
  )
}

export default ItemListContainer