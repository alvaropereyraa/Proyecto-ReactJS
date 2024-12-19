import React, { useState } from 'react';
import '../CSS/ItemCount.css';

const ItemCount = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...item, precio: Number(item.precio), quantity });
  };

  return (
    <div className="quantity-controls">
      <button className='restar' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
      <span>{quantity}</span>
      <button className='sumar' onClick={() => setQuantity(quantity + 1)}>+</button>
      <button className="sumar" onClick={handleAddToCart}>Añadir al Carrito</button> 
    </div>
  );
};

export default ItemCount;
