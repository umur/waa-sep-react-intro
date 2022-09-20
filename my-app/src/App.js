import React, { useState } from "react";
import Product from "./Product";
import productsList from "./data/product";

function App() {
  const [productsState, setProductsState] = useState(() => productsList());
  const [inputState, setInputState] = useState("");

  function inputChangeHandler(event) {
    setInputState(event.target.value);
  }

  function createClickHandler() {
    productsState.push({
      id: productsState.length + 1,
      name: inputState,
      category: {
        id: 1,
        name: "Apple"
      }
    });
    setProductsState([...productsState]);
  }

  return (
    <div>
      <h1>Product</h1>
      <hr />
      <ol>
        {
          productsState.map((product) => {
            return <Product key={product.id} category={product.category.name} name={product.name} />
          })
        }
      </ol>
      <hr />
      <input type="text" placeholder="Product name" onChange={inputChangeHandler} />
      <input type="submit" value="Create" onClick={createClickHandler} />
    </div>
  );
}

export default App;
