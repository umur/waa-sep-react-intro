import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import Categorys from "./category/Categorys";
import CreateCategory from "./category/CreatCategory";
import Products from "./Products/Products";
import CreatProduct from "./Products/CreatProduct";
import GetCategoryByID from "./category/GetCategoryById";
function App() {
  const categoryList = [
    { id: 1, name: "food" },
    { id: 2, name: "book" },
  ];
  const productLis = [
    { id: 1, name: "iphon", price: 120, rating: "2.5" },
    { id: 2, name: "apple", price: 220, rating: "2.5" },
  ];
  const [categoryState, setCategoryState] = useState({ id: 1, name: "food" });
  const onGetCategoryClicked = () => {
    console.log("hi");
    setCategoryState({ categoryList });
    console.log(categoryState);
  };
  let [getCategoryState, setGetCategoryState] = useState(categoryList);
  return (
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
    </div>
  );
}

export default App;
