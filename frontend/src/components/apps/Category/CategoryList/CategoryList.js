import React from 'react';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { Table } from '../../../bases/Table/Table';

export const CategoryList = (props) => {
  const headers = [{ name: "#", className: "float-right" },
    { name: "Name", className: "center" },
    { name: "Actions", className: "center"}
  ];
  return (
    <Table headers={headers}>
      {
        props.data.map((item,idx) => {
          return <CategoryItem key={idx} {...item} />
        })
      }
    </Table>
  )
};
