import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProudcts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  function loadProducts() {
    axios.get("http://localhost:8080/products").then((res) => {
      setProducts(res.data);
    });
  }

  function editProduct(productId) {
    console.log("product id " + productId);
    navigate("/products/" + productId);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => {
          return (
            <tr id={p.id}>
              <td>
                <button onClick={() => editProduct(p.id)}>Select</button>
              </td>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AllProudcts;
