import React from "react";
import Card from "./Card";

export default function AddProduct(props) {
  const addProductHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addProductHandler}>
        <label htmlFor="productId">Id</label>
        <input id="ProductId" type="text" />
        <label htmlFor="productName">name</label>
        <input id="ProductId" type="text" />
        <label htmlFor="productPrice">price</label>
        <input id="productPrice" type="text" />
        <label htmlFor="productRating">rating</label>
        <input id="productRating" type="text" />
        <button type="submit">Add Product</button>
      </form>
    </Card>
  );
}
//  private int id;
// private String name;
// private float price;
// private int rating;
