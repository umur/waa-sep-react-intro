import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

const EditProduct = () => {
  let { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(1);
  const [rating, setRating] = useState(1);

  function getProduct() {
    axios
      .get("http://localhost:8080/products/" + id)
      .then((res) => {
        updateState(res.data);
      })
      .catch((e) => console.log(e));
  }

  function updateState(p) {
    console.log(p);
    setName(p.name);
    setPrice(p.price);
    setCategory(p.category.id);
    setRating(p.rating);
  }

  function loadCategories() {
    axios.get("http://localhost:8080/categories").then((res) => {
      setCategories(res.data);
    });
  }

  useEffect(() => {
    loadCategories();
    getProduct();
  }, []);

  const data = {
    id: id,
    name: name,
    price: Number(price),
    category: {
      id: category,
    },
    rating: Number(rating),
  };

  function submitProduct(e) {
    e.preventDefault();
    console.log("submitting");

    axios
      .put("http://localhost:8080/products/" + id, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="container mt-5 mb-6">
      <div className="card ms-auto me-auto p-3 shadow-log ">
        <form className="row g-3">
          <div className="mb-3">
            <label htmlFor="textProductName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              id="txtProductName"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="txtProductPrice" className="form-label">
              Product Price
            </label>
            <input
              type="text"
              id="txtProductRating"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="txtProductPrice" className="form-label">
              Product Rating
            </label>
            <input
              type="text"
              id="txtProductRating"
              className="form-control"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-3">
            <button className="btn btn-primary" onClick={submitProduct}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
