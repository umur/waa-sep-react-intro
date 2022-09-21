import { useState } from "react"
import axios from "axios";

export default function CreaterProduct(){
    
    const [productsState, setProductsState]=useState({
        name:'',
        price:0,
        rating:0
        // catagory:0
    })

   
    const onChange= (e)=>{
        setProductsState({
            ...productsState,
            [e.target.name]: e.target.value            
        });
    
    }

    const saveButton=()=>{
        console.log(productsState);
        axios.post("http://localhost:8080/product",productsState)
    }


    return(
        <div>
            Product name:<input type='text'
            //value={productsState.name} 
            onChange={onChange}
            name='name'
            />

           Price:<input type='text'
           // value={productsState.price} 
            onChange={onChange}
            name='price'
            />

            Rating:<input type='text'
            //value={productsState.rating} 
            onChange={onChange}
            name='rating'
            />

            {/* Catagory:<input type='text'
            //value={productsState.catagory} 
            onChange={onChange}
            name='catagory'
            /> */}
            
            

            <input type='button'
            value='Save'
            onClick={saveButton}
            />
        </div>
    )
}