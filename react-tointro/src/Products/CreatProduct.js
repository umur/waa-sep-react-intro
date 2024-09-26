import { useState } from "react";

export default function CreatProduct(props) {
  const [productState, setProductState] = useState({
    id: "default",
    name: "default",
    price: "default",
    rating: "default",
  });
  const onProductCreated = (event) => {
    setProductState({
      ...productState,
      [event.target.name]: event.target.value,
    });
  };
  const onCreatProductCliced = () => {
    console.log("my product");
    console.log(productState);
  };

  return (
    <div>
      Id:
      <input
        type="text"
        value={productState.id}
        onChange={onProductCreated}
        name="id"
      />
      Name:
      <input
        type="text"
        value={productState.name}
        onChange={onProductCreated}
        name="name"
      />
      Price :
      <input
        type="text"
        value={productState.price}
        onChange={onProductCreated}
        name="price"
      />
      Rating :
      <input
        type="text"
        value={productState.rating}
        onChange={onProductCreated}
        name="rating"
      />
      <input
        type="button"
        value="Creat new Product"
        onClick={onCreatProductCliced}
      />
      <form> </form>
      <p>{productState.id}</p>
      <table>
        <tr>
          <th>Product id - {productState.id}</th>
        </tr>
        <tr>
          <th>Product name - {productState.name}</th>
        </tr>
        <tr>
          <th>Product price - {productState.price}</th>
        </tr>
        <tr>
          <th>Product rating - {productState.rating}</th>
        </tr>
      </table>
    </div>
  );
}
