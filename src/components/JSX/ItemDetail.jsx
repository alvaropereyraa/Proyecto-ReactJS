import React from 'react';
import ItemCount from './ItemCount';
import '../CSS/ItemDetail.css';

const ItemDetail = ({ item, addToCart, navigate }) => {
  const getClassForType = (type) => {
    const formattedType = type.toLowerCase().replace(", ", "-");
    return `item-detail ${formattedType}`;
  };

  return (
    <div className={getClassForType(item.tipo)}>
      <img src={item.imagen} alt={item.nombre} className="item-detail-img" />
      <h2>{item.nombre}</h2>
      <p>{item.description}</p>
      <p>Precio: {item.precio}</p>
      <p className="tipo">Tipo: {item.tipo}</p>
      <ItemCount item={item} addToCart={addToCart} />
      <button className="volver-inicio" onClick={() => navigate('/')}>Volver al Inicio</button>
    </div>
  );
};

export default ItemDetail;
