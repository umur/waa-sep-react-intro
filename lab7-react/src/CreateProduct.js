import axios from "axios";
import { useContext, useEffect, useState } from "react";
import React from "react";
import LanguageContext from "./LanguageContext";

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(1);
  const [rating, setRating] = useState(1);

  const nameRef = React.createRef();

  const { language, setLanguage } = useContext(LanguageContext);

  function submitProduct(e) {
    e.preventDefault();
    console.log("submitting");

    console.log(nameRef.current.value);
    axios
      .post("http://localhost:8080/products", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }

  const data = {
    name: name,
    price: Number(price),
    category: {
      id: category,
    },
    rating: Number(rating),
  };

  function loadCategories() {
    axios.get("http://localhost:8080/categories").then((res) => {
      setCategories(res.data);
    });

    // let cat = [
    //   { id: 1, name: "Phone" },
    //   { id: 2, name: "Tablet" },
    // ];
    // setCategories(cat);
    console.log(categories);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <div>{language}</div>
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
                ref={nameRef}
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
    </>
  );
};

export default CreateProduct;
