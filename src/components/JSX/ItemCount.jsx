import React from 'react';
import Button from 'react-bootstrap/Button';
import '../CSS/ItemCount.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemCount = () => {
  return (
    <div className="item-count">
      <Button variant="danger">-</Button> 
      <span className="count">1</span>
      <Button variant="success">+</Button> 
    </div>
  );
};

export default ItemCount;
