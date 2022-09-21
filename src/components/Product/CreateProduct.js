import { useState } from "react";
import axios from 'axios'

export default function CreateProduct(props) {

    const [productsState, setProductsState] = useState({

        id:'default',
        name:'default',
        price:'default',
        rating:'default'
    });

    const onChanged = (e) =>{
        setProductsState({
            ...productsState,
            [e.target.name]: e.target.value
        });
        
    }
    const saveButton = () => {
        console.log(productsState);
        axios.post("http://localhost:8080/product", productsState)
    }
    return(
        <div>
            Name: <input type = 'text'
            value = {productsState.name}
            onChange = {onChanged}
            name = 'name'
            />

            Price: <input type = 'text'
            value = {productsState.price}
            onChange = {onChanged}
            name = 'price'
            />

            Rating: <input type = 'text'
            value = {productsState.rating}
            onChange = {onChanged}
            name = 'rating'
            />

            <input type= 'button'
            value = "Save"
            onClick = {saveButton}
            />            
        </div>
    )

}