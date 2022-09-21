import React from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { Table } from '../../../bases/Table/Table';

export const ProductList = (props) => {
  const headers = [
    { name: "#", className: "float-right" },
    { name: "Name", className: "center" },
    { name: "Price", className: "center" },
    { name: "Rating", className: "center" },
    {name: "Actions", className: "center"},
  ];

  return (
    <Table headers={headers} >
      {
        props.data.map((item,idx) => (
          <ProductItem key={idx} {...item} />
        ))
      }
    </Table>
  );
}