import React from 'react';
import Item from './Item';
import '../CSS/ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
