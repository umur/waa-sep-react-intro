import React from 'react';
import { Table } from '../../../bases/Table/Table';
import { AddressItem } from '../AddressItem/AddressItem';

export const AddressList = (props) => {
  const headers = [{ name: "#", className: "float-right" },
    { name: "Street", className: "center" },
    { name: "City", className: "center" },
    { name: "Zip", className: "center" },
    { name: "Action", className: "center" }];
  
  return (
    <Table headers={headers}>
      {
        props.data.map((item,idx) => {
          return <AddressItem key={idx} {...item} />
        })
      }
    </Table>
    
  );
}