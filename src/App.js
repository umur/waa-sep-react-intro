import './App.css';
import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import Users from './components/Users';
import CreaterUser from './components/CreateUser';
import Product from './components/Products';
import CreaterProduct from './components/CreatProduct';
import ProductDetail from './components/ProductDetail';


function App() {

  const usersInsialiState=[
    {id: 1,fname:'dave', lname:'michael'},
    {id: 2,fname:'dawit', lname:'Zerom'},
    {id: 3,fname:'Tes', lname:'Fissahaye'}
   ]

   const productInsialiState=[
    {id: 1,name:'laptop',price:"2000", rating:'5', pcatagory:'electronics'}
   
   ]


   let [usersState,setUsersState] = useState(usersInsialiState);
   let [productState, setProductState]=useState(productInsialiState);
   let [productStateId, setProductStateId]= useState(1);

    const getProducts =async()=>{
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
        <h4>creat Users</h4>
       <CreaterUser/>
       <hr></hr>
       <h4>List of Users</h4>
       <Users users={usersState}/>
       <hr></hr>
       <h4>Creat Product</h4>
       <CreaterProduct/>
       <hr></hr>
       <h4>List of Product</h4>
       <Product products={productState}
       setProductStateId={setProductStateId}
      />

      <ProductDetail productStateId={productStateId}/>
       
        <hr></hr>
        
      
      



       </div>
    </div>
  );
}

export default App;
