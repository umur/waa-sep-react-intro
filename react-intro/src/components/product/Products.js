import React from 'react'
import Axios from 'axios'
import { useState,useEffect } from 'react'
import Product from './Product'
function Products() {

    const [data,setData] = useState([])
        
    useEffect(() =>{Axios.get("http://localhost:8082/products")
                    .then((response)=>setData(response.data))
                    .catch((error)=>{console.log(error)})
    },[])
  return (
    <div>
        <h1>List Of Products</h1>   
       <Product data={data} />

    </div>
  )
}

export default Products
