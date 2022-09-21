import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';

export default function Product(){
    const initialState = [
        {
            "id": 1,
            "name": "iPhone",
            "price": 1200,
            "rating": 8,
            "category": {
                "id": 1,
                "name": "Kitchen"
            }
        },
        {
            "id": 2,
            "name": "iPad",
            "price": 900,
            "rating": 7,
            "category": {
                "id": 2,
                "name": "Device"
            }
        },
    ]
    const [productState, setProductState] = useState(initialState);
    const getProduct = async () =>{
        const result = await axios.get("http://localhost:4042/products/1")
        setProductState(result.data);
        // console.log(result.data)
    }

    useEffect(()=>{
        getProduct();
    },[])
    console.log(productState.price);
    // const category_name = productState.category.name;
    // <h4>Category : {productState.category_name}</h4>
    return(
        <div>
            <h1>Product:</h1>
            <h4>Product Id :{productState.id}</h4>
            <h4>Product Name : {productState.name}</h4>
            <h4>Price : {productState.price}</h4>
            <h4>Rating : {productState.rating}</h4>

            *************************************
        </div>
    )

}