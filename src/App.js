import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartProvider from '../src/components/JSX/context/CartProvider';
import ItemListContainer from '../src/components/JSX/ItemListContainer';
import ItemDetailContainer from '../src/components/JSX/ItemDetailContainer';
import NavBar from '../src/components/JSX/Navbar';
import Cart from '../src/components/JSX/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
