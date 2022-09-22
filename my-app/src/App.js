import logo from "./logo.svg";
import "./App.css";
import CreateProduct from "./createProduct";
import { useState } from "react";
import productTable from "./productTable";
import ProductTable from "./productTable";
import Header from "./justjsx";

function App() {
  const [productState, setProductState] = useState({
    productName: "",
    price: 0,
  });
  const [listOfProducts,setListOfProducts] = useState([]);
  const [listOfUndo,setListOfUndo] = useState([]);
  
  const objFromDatabase = {
    products: [
      { id: 1, product: "iphone", price: 1000 },
      { id: 2, product: "samsung", price: 2000 },
      { id: 3, product: "nokia", price: 3000 },
    ],
  };
  

  return (
    <div className="App">
      <Header value={listOfProducts} />

      <CreateProduct
        set={(productObj) =>{
          setProductState({
            productName: productObj.productName,
            price: productObj.price,
          })
          setListOfProducts([...listOfProducts,productObj.productName])
        }
        }
        undo = {()=>{
          if(listOfProducts != null){
            setListOfUndo([...listOfUndo, listOfProducts.pop()])
          }
        }}
        redo ={()=>{
         if(listOfUndo != null){
          setListOfProducts([...listOfProducts,listOfUndo.pop()])
         }
        }}
      />
      <br />
      <br />
      <ProductTable myObj={objFromDatabase} />
    </div>
  );
}

export default App;
