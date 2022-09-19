import React from "react";
import Item from "./Item";
const Items = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Item item={item}></Item>
      ))}
    </div>
  );
};

export default Items;
