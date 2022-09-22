import { useState } from "react";

export default function (props) {
    

    let [productState,setProductState] = useState({
        productName:'',
        price:0
    })


  return (
    <div>
      <br />
      <br />
      Product Name <input onChange={(e)=> setProductState({...productState,productName:e.target.value}) } type="text" name="productName" />
      <br />
      <br />
      Price <input onChange={(e) => setProductState({...productState,price:e.target.value})} type="number"  name="price" />
      <br />
      <br />
      <button onClick={()=> props.set(productState)}>Save</button>
      <button onClick={props.undo} >Undo</button>
      <button onClick={props.redo}>Redo</button>
    </div>
  );
}
