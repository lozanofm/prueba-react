import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a la Tienda Oficial de Crossfit"}/>
    </div>
  );
}

export default App;
