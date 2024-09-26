import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Categorys from "./category/Categorys";
import Product from "./Products/Product";
import Products from "./Products/Products";
import ProductDetail from "./Products/ProductDetail";
import { instance } from "./index";

function App() {
  // creat base URL
  axios.defaults.baseURL = "http://localhost:8080";
  // fix this part if it need spring project with security
  const getPersonsWithBaseUrl = async () => {
    const result = await instance.get("/products");
    console.log(result.data);
  };

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
    const result = await axios.get("/products");
    setCategoryState(result.data);
    // console.log(result);
  };

  const [productState, setProductState] = useState([
    { id: 1, name: "iphon", price: 120, rating: "2.5" },
    { id: 2, name: "apple", price: 220, rating: "5.5" },
  ]);

  const getProducts = async () => {
    const result = await axios.get("/products");

    setProductState(result.data);
  };
  useEffect(() => {
    getCategorys();
    getProducts();
    getPersonsWithBaseUrl();
  }, []);
  // creat a state to get selected Product Id
  const [selectedProductId, setSelectedProductId] = useState(1);

  // we need to know the current state of toggle so lets use state
  // we want to display and hide the list of products
  const [toggleState, setToggleState] = useState(true);

  const onToggleClicked = () => {
    setToggleState(!toggleState);
  };
  let ProductComponetn = (
    <Products
      Products={productState}
      setSelectedProductId={setSelectedProductId}
    />
  );
  // wow show hid work correctly
  if (!toggleState) {
    ProductComponetn = null;
  }

  return (
    <div className="App">
      <div>
        <Categorys Categorys={categoryState} />
        <input type="button" value="Show / Hide" onClick={onToggleClicked} />
        <p>list of Products</p>
        {/* <Products
          Products={productState}
          setSelectedProductId={setSelectedProductId}
        /> */}
        {/* {ProductComponetn} */}
        {/* instade of writing if statement of toggleState we can ... */}
        {(toggleState) ? ProductComponetn:null}
        <ProductDetail selectedProductId={selectedProductId} />
        // practice on Toggled
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
