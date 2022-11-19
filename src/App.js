import './App.css';
import ProductItem from './components/ProductItem';
import FilterBar from './components/FilterBar';
import Favorites from './components/Favorites';
import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import {BottomNavigation} from "@mui/material"

function App() {

  const productList = [
    { name: "AKITA", price: "300", size: "Large", bestfor: "Hunting", description: "The Akita is a muscular, double-coated dog of ancient Japanese lineage famous for their dignity and loyalty.", image: "images/akita.png"},
    { name: "BEAGLE", price: "150", size: "Small", bestfor: "Hunting", description: "Beagles are muscular dogs with a slightly domed skull. Their muzzle is squarish. Ears are long and droopy.", image: "images/beagle.png"},
    { name: "DALMATION", price: "280", size: "Average", bestfor: "Guarding", description: "Dalmations are aloof with strangers and are dependable watchdogs. The coat is dense with brown or black spots.", image: "images/dalmation.png"},
    { name: "PUG", price: "120", size: "Small", bestfor: "Companionship", description: "The Pug has an even and stable temperament, great charm, and an outgoing, loving disposition.", image: "images/pug.png"},
    { name: "GOLDEN RETRIEVER", price: "200", size: "Large", bestfor: "Hunting", description: "Golden Retrievers are kind and gentle. Famous for the lustrous coat of gold that gives the breed its name.", image: "images/goldenretriever.png"},
    { name: "BICHON FRISE", price: "400", size: "Small", bestfor: "Companionship", description: "Known for their “powder puff” coat, the Bichon Frise hides easily in a sea of stuffed animals.", image: "images/bichonfrise.png"},
    { name: "ST.BERNARD", price: "420", size: "Large", bestfor: "Guarding", description: "Known as a gentle giant, the Saint Bernard is calm, patient, and sweet with children.", image: "images/stbernard.png"},
    { name: "DACHSHUND", price: "360", size: "Small", bestfor: "Hunting", description: "Dachshunds are lively, playful, and clever. They have a reputation for being on the stubborn side, too.", image: "images/dachshund.png"},
    { name: "TIBETAN MASTIFF", price: "450", size: "Large", bestfor: "Guarding", description: "Watchful, aloof, imposing, and intimidating: The ancient Tibetan Mastiff is the guardian dog supreme.", image: "images/tibetanmastiff.png"},
    { name: "CHIHUAHUA", price: "270", size: "Small", bestfor: "Companionship", description: "The Chihuahua is a balanced, graceful dog of terrier-like demeanor, weighing no more than 6 pounds.", image: "images/chihuahua.png"},
    { name: "CHOW CHOW", price: "300", size: "Average", bestfor: "Guarding", description: "The distinctive-looking Chow Chow dog breed has a proud, independent spirit that some describe as catlike.", image: "images/chowchow.png"},
    { name: "BORDER COLLIE", price: "410", size: "Average", bestfor: "Guarding", description: "This highly intelligent, graceful dog is born with an instinct to work and responds well to training.", image: "images/bordercollie.png"}
   ]

  const [total, setTotal] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [type, setType] = useState("All");

  const selectFilterType = eventKey => {
    setType(eventKey);
    };

  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if (type === "All") {
    return true 
    } else if (type === item.size || type === item.bestfor) {
    return true 
    } else {
    return false
    }
    }

  const filteredData = productList.filter(matchesFilterType)

  return (
    <div className="App">

      <h1>CHOOSE YOUR SIDEKICK</h1> 

      <div className="Main-grid">
        
      <div className="Side-bar">
      <br></br>
        <Nav onSelect={selectFilterType}>
      <Nav.Item>
        <Nav.Link eventKey="All"> View All</Nav.Link>
      </Nav.Item>
      <br></br>
      <h3>SIZE</h3>
      <Nav.Item>
        <Nav.Link eventKey="Large">Large</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Average">Average</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Small">Small</Nav.Link>
      </Nav.Item>
      </Nav>

        <br></br>

        <Nav onSelect={selectFilterType}>
      <h3>BEST FOR</h3>
      <Nav.Item>
        <Nav.Link eventKey="Hunting">Hunting</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Guarding">Guarding</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Companionship">Companionship</Nav.Link>
      </Nav.Item>
      </Nav>

        <br></br>

        <h3>SORT</h3>
        <FilterBar/>

        <br></br>

        <h3>FAVORITES</h3>
        <Favorites list={favorites}/>
        <p>Price:${total}</p>
      </div>
      

      <div className="Product-grid">
      {filteredData.map((item, index) => ( 
        <ProductItem item={item} index={index} setTotal={setTotal} total={total} 
        setFavorites={setFavorites} favorites={favorites}/> 
      ))}
      </div>

      </div>

      <BottomNavigation>
        <p> pixel art credit: @sy0sa on twitter </p>
      </BottomNavigation>

    </div>
  );
}

export default App;
