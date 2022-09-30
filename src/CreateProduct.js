import { useState } from "react";

export default function CreateProduct(props){
    const [productState, setProductsState] = useState({

        
    });

    const onChanged = (e) => {
        setProductsState ({
            ...productState,
            [e.target.name]: e.target.value
        })
    }
    
    const onSaveButtonClicked = () => {
        console.log(productState);
    }

    return (
        <div>
            Name: <input type='text' value={props.name} onChange={onChanged} />
            Category: <input type='text' value={props.category} onChange={onChanged} />
            Price:  <input type='text' value={props.price} onChange={onChanged} />
            Rating:  <input type='text' value={props.rating} onChange={onChanged} /> 
            &nbsp; <input type='button' value='Save' onClick={onSaveButtonClicked} />
        </div>
    );    
}