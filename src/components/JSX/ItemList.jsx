import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../JSX/context/CartContext';
import '../CSS/ItemList.css';

const ItemList = ({ items }) => {
  const { addToCart } = useContext(CartContext);
  const [sortOrder, setSortOrder] = useState('');
  const [filter, setFilter] = useState('');

  const sortAndFilterItems = (items) => {
    let filteredItems = items;

    if (filter !== '') {
      filteredItems = items.filter(item => item.evolucion === parseInt(filter, 10));
    }

    if (sortOrder === 'asc') {
      return filteredItems.sort((a, b) => a.precio - b.precio);
    } else if (sortOrder === 'desc') {
      return filteredItems.sort((a, b) => b.precio - a.precio);
    }

    return filteredItems;
  };

  const handleSortOrderChange = (event) => {
    const value = event.target.value;
    if (value === 'asc' || value === 'desc') {
      setSortOrder(value);
    } else {
      setSortOrder('');
      setFilter(value);
    }
  };

  return (
    <div className="item-list-container">
      <div className="filter-dropdown">
        <label htmlFor="filter-select">Filtros:</label>
        <select id="filter-select" onChange={handleSortOrderChange}>
          <option value="">Todos</option>
          <option value="1">1era Evolución</option>
          <option value="2">2da Evolución</option>
          <option value="3">3ra Evolución</option>
          <option value="asc">Precio Ascendente</option>
          <option value="desc">Precio Descendente</option>
        </select>
      </div>
      <div className="item-list">
        {sortAndFilterItems(items).map((item, index) => (
          <div key={index} className="card">
            <img src={item.imagen} alt={item.nombre} className="card-img" />
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <p>Precio: {item.precio}</p>
            <Link to={`/item/${item.id}`} className="detalle-boton">Ver Detalle</Link>
            <button className="añadir-al-carrito" onClick={() => addToCart({ ...item, quantity: 1 })}>
              Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
