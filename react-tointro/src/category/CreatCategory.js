import { useState } from "react";

export default function CreateCategory(props) {
  const [categoryState, setCategoryState] = useState({
    id: "default",
    name: "default",
  });
  const onCategoryCreated = (e) => {
    setCategoryState({ ...categoryState, [e.target.name]: e.target.value });
  };

  const onSaveCategoryClicked = () => {
    console.log(categoryState);
    const list = props.getCategoryState;
    list.push(categoryState);
    props.setGetCategoryState(list);
    console.log(list);
  };
  return (
    <div>
      Id :
      <input
        type="text"
        value={categoryState.id}
        onChange={onCategoryCreated}
        name="id"
      />
      Name :
      <input
        type="text"
        value={categoryState.name}
        onChange={onCategoryCreated}
        name="name"
      />
      <input
        type="button"
        value="Creat new Category"
        onClick={onSaveCategoryClicked}
      />
    </div>
  );
}
