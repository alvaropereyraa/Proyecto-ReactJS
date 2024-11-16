import React from 'react';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 
import '../CSS/Item.css';

const Item = ({ item }) => {
  const alturaEnCm = item.height * 10; 
  const pesoEnKg = item.weight * 0.1; 
  return (
    <div className="item">
      <img src={item.sprites.front_default} alt={item.name} className="item-image" />
      <h3 className='pokemon-name'>{item.name}</h3>
      <p className='pokemon-id'>Pokédex: N.°{item.id}</p>
      <p>Altura: {alturaEnCm} cm</p>
      <p>Peso: {pesoEnKg} kg</p>
      <Link to={`/item/${item.id}`}>
        <Button variant="primary">Ver más</Button>
      </Link>
    </div>
  );
};

export default Item;
