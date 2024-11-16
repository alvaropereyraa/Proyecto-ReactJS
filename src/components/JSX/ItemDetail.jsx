import React from 'react';
import '../CSS/ItemDetail.css';
import '../CSS/Item.css'; 
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const alturaEnCm = item.height * 10; 
  const pesoEnKg = item.weight * 0.1; 
  // Las medidas de la api estan en hectogramos y decimetros, por lo tanto para modificar estas medidas necesite de estos calculos, esto puede generar algunos problemas de redondeo como ahora mismo tiene Caterpie, Dugtrio y Golduck.//

  return (
    <div className="item">
      <img src={item.sprites.front_default} alt={item.name} className="item-image" />
      <h3 className='pokemon-name'>{item.name}</h3>
      <p className='pokemon-id'>Pokédex: N.°{item.id}</p>
      <p>Altura: {alturaEnCm} cm</p>
      <p>Peso: {pesoEnKg} kg</p>
      <p>Habilidades:</p>
      <ul className="habilidades">
        {item.abilities.map((habilidad, indice) => (
          <li key={indice} className="habilidad">{habilidad.ability.name}</li>
        ))}
      </ul>
      <p>Tipos:</p>
      <ul className="tipos">
        {item.types.map((tipo, indice) => (
          <li key={indice} className="tipo">{tipo.type.name}</li>
        ))}
      </ul>
      <Link to="/"> <Button variant="secondary">Volver a Inicio</Button> </Link>
      <ItemCount/>
    </div>
  );
};

export default ItemDetail;
