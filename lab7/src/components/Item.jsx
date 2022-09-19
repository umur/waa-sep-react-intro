import React from "react";

const Item = ({ item }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.quantity}</div>
      <div>{item.price}</div>
    </div>
  );
};

export default Item;
