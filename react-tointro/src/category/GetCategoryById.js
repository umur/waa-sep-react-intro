import { useState } from "react";

export default function GetCategoryByID(props) {
  const [productIdState, setProductIdState] = useState(0);

  const productIdOnChange = (e) => {
    console.log("so");
    const id = setProductIdState(e.target.value);
    console.log(productIdState);
    // props.Categorys.filter((item) => item.id == id);
    // console.log(props);
  };
  return (
    <div>
      <p>Get Product By Id</p>
      Product Id :
      <input
        type="text"
        value={productIdState}
        onChange={productIdOnChange}
      ></input>
      <input
        type="button"
        value="enter Category ID"
        onClick={productIdOnChange}
      />
    </div>
  );
}
