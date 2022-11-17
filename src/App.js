import './App.css';
import ProductItem from './components/ProductItem';
import FilterBar from './components/FilterBar';
import Favorites from './components/List';
import { useState } from "react";


function App() {

  const productList = [
    { name: "AKITA", price: "300", size: "Large", category2: "hi", description: "blahblah", image: "images/akita.png"},
    { name: "BEAGLE", price: "150", size: "Small", category2: "hi", description: "blahblah", image: "images/beagle.png"},
    { name: "DALMATION", price: "30", size: "Desktop", category2: "hi", description: "blahblah", image: "images/dalmation.png"},
    { name: "PUG", price: "30", size: "Medium", category2: "hi", description: "blahblah", image: "images/pug.png"},
    { name: "GOLDEN RETRIEVER", price: "30", size: "Desktop", category2: "hi", description: "blahblah", image: "images/goldenretriever.png"},
    { name: "BICHON FRISE", price: "30", size: "Medium", category2: "hi", description: "blahblah", image: "images/bichonfrise.png"},
    { name: "DACHSUND", price: "30", size: "Large", category2: "hi", description: "blahblah", image: "images/dachsund.png"},
    { name: "ST.BERNARD", price: "30", size: "Desktop", category2: "hi", description: "blahblah", image: "images/stbernard.png"},
    { name: "TIBETAN MASTIFF", price: "30", size: "Medium", category2: "hi", description: "blahblah", image: "images/tibetanmastiff.png"},
    { name: "CHIHUAHUA", price: "30", size: "Desktop", category2: "hi", description: "blahblah", image: "images/chihuahua.png"},
    { name: "CHOW CHOW", price: "30", size: "Medium", category2: "hi", description: "blahblah", image: "images/chowchow.png"},
    { name: "BORDER COLLIE", price: "30", size: "Desktop", category2: "hi", description: "blahblah", image: "images/bordercollie.png"}
   ]

  /*const filteredData = productList.filter(myFilterFunction)*/

  const [total, setTotalValue] = useState(0);
  const [favorites, setFavorites] = useState([]);

  function selectFilterType() {
  }

  function matchesFilterType() {
  }

  return (
    <div className="App">

      <h1>PIXEL PET SHOP</h1> 

      <div className="Main-grid">
        
      <div className="Side-bar">
        <h3>FILTER</h3>
        <FilterBar/>
        <Favorites list={favorites}/>
      </div>

      <div className="Product-grid">
      {productList.map((item, index) => ( 
        <ProductItem item={item} index={index} setTotal={setTotalValue} total={total} 
        setCart={setFavorites} cart={favorites}/> 
      ))}
      </div>

      </div>
    </div>
  );
}

export default App;
