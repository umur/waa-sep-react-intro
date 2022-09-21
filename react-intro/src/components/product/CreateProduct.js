import React, { useEffect,useState } from 'react'
import axios from 'axios'
function CreateProduct() {
    const [productState,setProductState] = useState({
        name : "",
        price : 0.0,
        rating : 0
    })
    useEffect(()=>{
        console.log("effect running")
    },[])
    const saveProduct = () => {
        axios.post("http://localhost:8082/products",productState)
             .then((response)=>{console.log(response)})
    }
    const inputChange = (e) => {
            setProductState({...productState,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <label> Product Name:</label><input type='text' name='name' onChange={inputChange}  />
        <label>Product Price:</label><input type='text' name='price' onChange={inputChange}/>
        <label>Product Rating:</label><input type='text' name='rating' onChange={inputChange}/>
        <button onClick={saveProduct}>Save</button>
    </div>
  )
}
export default CreateProduct
