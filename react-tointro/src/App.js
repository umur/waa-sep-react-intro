import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Categorys from "./category/Categorys";
import Product from "./Products/Product";
import Products from "./Products/Products";
import ProductDetail from "./Products/ProductDetail";

function App() {
  const categoryList = [
    { id: 1, name: "food" },
    { id: 2, name: "book" },
  ];
  const productLis = [
    { id: 1, name: "iphon", price: 120, rating: "2.5" },
    { id: 2, name: "apple", price: 220, rating: "2.5" },
  ];

  // lets creat state for categorys in order to be able to get it form back end

  // practice using axios and useEffect
  const [categoryState, setCategoryState] = useState([
    { id: 1, name: "food" },
    { id: 2, name: "book" },
  ]);

  const getCategorys = async () => {
    const result = await axios.get("http://localhost:8080/products");
    setCategoryState(result.data);
    // console.log(result);
  };

  const [productState, setProductStater] = useState([
    { id: 1, name: "iphon", price: 120, rating: "2.5" },
    { id: 2, name: "apple", price: 220, rating: "5.5" },
  ]);

  const getProducts = async () => {
    const result = await axios.get("http://localhost:8080/products");

    setProductStater(result.data);
  };
  useEffect(() => {
    getCategorys();
    getProducts();
  }, []);
  // creat a state to get selected Product Id
  const [selectedProductId, setSelectedProductId] = useState(1);
  return (
    <div className="App">
      <div>
        <Categorys Categorys={categoryState} />
        <p>list of Products</p>
        <Products
          Products={productState}
          setSelectedProductId={setSelectedProductId}
        />
        <ProductDetail selectedProductId={selectedProductId} />
      </div>
    </div>
  );
}

export default App;

/* 



  const [categoryState, setCategoryState] = useState({ id: 1, name: "food" });
  const onGetCategoryClicked = () => {
    console.log("hi");
    setCategoryState({ categoryList });
    console.log(categoryState);
  };
  let [getCategoryState, setGetCategoryState] = useState(categoryList);


  <div className="App">
      <div>
        <p>Welcom to my first React project.</p>
        <input
          type="button"
          value="Get Categorys"
          onClick={onGetCategoryClicked}
        />
        <Categorys Categorys={categoryList} />
        <CreateCategory
          getCategoryState={getCategoryState}
          setGetCategoryState={setGetCategoryState}
        />
        <GetCategoryByID />
      </div>
      <div>
        <p>Products</p>
        <Products Products={productLis} />
        <GetCategoryByID Categorys={categoryList} />
      </div>
    </div>*/
