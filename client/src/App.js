import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Rating from "./Rating";

function App() {
  const [productsState, setProductsState] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(1);

  const getProducts = async () => {
    const result = await axios.get("http://localhost:8080/products");
    setProductsState(result.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Products products={productsState} setSelectedProductId={setSelectedProductId} />
      <Rating selectedProductId={selectedProductId} />
    </div>
  );
}

export default App;
