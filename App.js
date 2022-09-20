import logo from './logo.svg';
import './App.css';
import Product from "./Product"
import {useState} from 'react';

function App() {


  const products = [
    { id: 1, name: 'phone 11 pro max' },
    { id: 2, name: 'Iphone 12' },
    { id: 3, name: 'Iphone 13 mini' },
    { id: 4, name: 'Iphone 14 purple' }
  ]

  const [deletedProductsState, setDeletedProductsState] = useState([])


  const [productsState, setProductsState] = useState(products);


  const [productName, setProductName] = useState("");



  const handleChange = (e)=>{
    setProductName(e.target.value);
    console.log(e.target.value);
  }

  const handleClick = ()=>{
   setProductsState([...productsState , {id: productsState.length + 1, name: productName}])
  }




  const  undo = ()=> {
    let deletedProduct = productsState.pop();
    setProductsState([...productsState]);
    setDeletedProductsState([...deletedProductsState, deletedProduct]);
  }



  const redo = ()=>{
      let getFromDeletedList = deletedProductsState.pop();
      setDeletedProductsState([...deletedProductsState])
      setProductsState([...productsState, getFromDeletedList]);

  }
  return (
    <div>

      <h1>Products</h1>
      <ol>
        {
          productsState.map((item) => {
            return (
              <Product id={item.id} name={item.name} />
            )
          })
        }
      </ol>

    
      <input type='text'  placeholder='enter' onChange={handleChange} /> 
      <input type='button' value="add" onClick={handleClick}/>
      <input type='button' value='undo' onClick={undo}/>
      <input type='button' value='redo' onClick={redo}/>

    </div>
  );
}

export default App;
