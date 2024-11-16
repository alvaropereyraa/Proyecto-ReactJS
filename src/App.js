import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/JSX/Navbar";
import ItemListContainer from "./components/JSX/ItemListContainer";
import ItemDetailContainer from "./components/JSX/ItemDetailContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} /> 
      </Routes>
    </Router>
  );
}

export default App;
