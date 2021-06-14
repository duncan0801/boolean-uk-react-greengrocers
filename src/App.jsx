import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/index.css";

/* 
Your store item should have the following structure

{
  id: "001-beetroot", <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 <- You can come up with your own prices
}

*/
const initialItems = [
  {
    id: "001-beetroot", 
    name: "beetroot",
    price: 0.35 
  },
  {
    id: "002-carrot", 
    name: "carrot",
    price: 0.35 
  },
  {
    id: "003-apple", 
    name: "apple",
    price: 0.35 
  },
  {
    id: "004-apricot", 
    name: "apricot",
    price: 0.35 
  },
  {
    id: "005-avacado", 
    name: "avacado",
    price: 0.35 
  },
  {
    id: "006-bananas", 
    name: "bananas",
    price: 0.35 
  },
  {
    id: "007-bell-pepper", 
    name: "bell pepper",
    price: 0.35 
  },
  {
    id: "008-berry", 
    name: "berry",
    price: 0.35 
  },
  {
    id: "009-blueberry", 
    name: "blueberry",
    price: 0.35 
  },
  {
    id: "010-eggplant", 
    name: "eggplant",
    price: 0.35 
  }
] 
const [items, setShopItems] = useState(initialItems)

const assetPath = "../assets/icons"


export default function App() {
  return (
  <div className="App">
    <div className="App">
          <Header/>
          <Main/>
          <Footer/>
        </div>
  </div>)
}
