import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../JSX/ItemList';
import { getProductsByCategory } from '../../firebase/db';
import '../CSS/ItemListContainer.css';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id: categoria } = useParams();

  useEffect(() => {
    const obtenerItems = async () => {
      const productosFiltrados = await getProductsByCategory(categoria);
      setItems(productosFiltrados);
    };

    obtenerItems();
  }, [categoria]);

  return (
    <div className="item-list-container">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
