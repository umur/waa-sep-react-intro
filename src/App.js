import './App.css';
import React, {useEffect, useState} from 'react';
import CreateUser from './components/User/CreateUser';
import Users from './components/User/Users';
import User from './components/User/User';
import CreateProduct from './components/Product/CreateProduct';
import Product from './components/Product/Product';
import ProductDetail from './components/Product/ProductDetails';
import axios from 'axios'



function App() {

  
    const usersInitialState = [
      { id: 1, fname: 'Umur', lname: 'Inan', password:100, email:'una@gmail.com'},
      { id: 2, fname: 'John', lname: 'Doe', password:100, email:'doe@gmail.com'},
      { id: 3, fname: 'Dawit', lname: 'Zerom', password:100, email:'dzer@gmail.com'}
    ]

    const productInitialState = [
      { id: 1, name: 'Samsung', price: '200', rating:'3', catagory:'electronics'}
    ]

    let [usersState, setUsersState] = useState(usersInitialState);
    let [productState, setProductState] = useState(productInitialState);
    let [productStateId, setProductStateId] = useState(1);

    const getProducts = async()=>{
      const result = await axios.get("http://localhost:8080/product");
      console.log(result.data);
      setProductState(result.data);

    }
    useEffect(()=>{
      getProducts();
    },[])

    return (
      <div>
        <div>
          <h4>Create Users</h4>
          <CreateUser/>
          <hr></hr>
          <h4>List of Users</h4>
          <Users users={usersState}/>
          <hr></hr>
          <h4>Create Product</h4>
          <CreateProduct/>
          <hr></hr>
          <h4>List of Product</h4>
          <Product products={productState}
          setProductStateId={setProductStateId}/>
          <ProductDetail productStateId={productStateId}/>
          <hr></hr>
        </div>
      </div>
    );
  }

  export default App;