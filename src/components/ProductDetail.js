import axios from "axios";
import { useEffect, useState } from "react"


export default function ProductDetail(props){

    const[prodiuctDetail, setProductDetail] =useState({
        id:1,
        name:'',
        price:0,
        rating:0
    });

    const getById= async()=>{
        const result =  await axios.get("http://localhost:8080/product/"+props.productStateId)
        console.log(result.data);
        setProductDetail(result.data)
    }

    useEffect(()=>{
        getById()
    }, [props.productStateId])
    return(
        <div>
            <h4>Product Id: {prodiuctDetail.id}</h4>
            <h4>Product Name: {prodiuctDetail.name}</h4>
            <h4>Product Price: {prodiuctDetail.price}</h4>
            <h4>Product Rating: {prodiuctDetail.rating}</h4>
        </div>
    )

}