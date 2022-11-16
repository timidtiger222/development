import './App.css';
import ProductItem from './components/ProductItem';
import { useState } from "react";

function App() {

  const productList = [
    { name: "Cute Plant", size: "Medium"},
    { name: "Happy Plant", size: "Large"},
    { name: "Sad Plant", size: "Desktop"},
    { name: "Smart Plant", size: "Medium"},
    { name: "Sleepy Plant", size: "Desktop"},
    { name: "Cute Plant", size: "Medium"},
    { name: "Happy Plant", size: "Large"},
    { name: "Sad Plant", size: "Desktop"},
    { name: "Smart Plant", size: "Medium"},
    { name: "Sleepy Plant", size: "Desktop"},
    { name: "Smart Plant", size: "Medium"},
    { name: "Sleepy Plant", size: "Desktop"}
   ]

  return (
    <div className="App">

      <h1>My Development Project</h1> 

      <div className="Main-grid">

      <div className="Side-bar">
        <p>hi</p>
      </div>

      <div className="Product-grid">
      {productList.map((item, index) => ( 
        <ProductItem item={item} index={index}/> 
      ))}
      </div>

      </div>
    </div>
  );
}

export default App;
