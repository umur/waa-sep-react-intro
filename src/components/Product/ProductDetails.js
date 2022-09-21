import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductDetail(props) {
    
    const [productDetail, setProductDetail] = useState({
        
        id:1,
        name:'',
        price:0,
        rating:0
        // category: 
    });

    const getById = async() => {
        const result = await axios.get("http://localhost:8080/product/" + props.productStateId)
        console.log(result.data);
        setProductDetail(result.data)
    }

    useEffect(() =>{
        getById()
    }, [props.productStateId])

    return (
        <div>
            {/* <h4>Product {id}</h4> */}
            <h4>Product Id: {productDetail.id} </h4>
            <h4>Product Name: {productDetail.name} </h4>
            <h4>Product Price: {productDetail.price} </h4>
            <h4>Product Rating: {productDetail.rating} </h4>
        </div>
    )

}