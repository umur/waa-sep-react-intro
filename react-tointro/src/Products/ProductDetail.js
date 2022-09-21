import { useEffect } from "react";

export default function ProductDetail(props) {
    useEffect(() => {
        console.log(props.selectedProductId);
    },[props.selectedProductId])
    return (
      <div>
        <p>Product Id {props.id}  </p>
          <p>Product Name {props.name} </p>
          <p> Product Price {props.price} </p>
          <p> Product rating {props.rating}</p>
      </div>
    );
  }