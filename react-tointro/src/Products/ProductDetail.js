import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail(props) {
  const [productState, setProductState] = useState([
    { id: 1, name: "iphon", price: 120, rating: "2.5" },
    { id: 2, name: "apple", price: 220, rating: "5.5" },
  ]);

  const fetchProduct = async () => {
    const result = await axios.get(
      "/products/" + props.selectedProductId
    );

    setProductState(result.data);
  };
  useEffect(() => {
    fetchProduct();
  }, [props.selectedProductId]);
  return (
    <div>
      <p>Product Id {productState.id} </p>
      <p>Product Name {productState.name} </p>
      <p> Product Price {productState.price} </p>
      <p> Product rating {productState.rating}</p>
    </div>
  );
}
