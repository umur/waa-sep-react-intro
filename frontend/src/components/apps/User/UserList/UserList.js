import React from 'react';
import { UserItem } from '../UserItem/UserItem';
import { Table } from '../../../bases/Table/Table';

export const UserList = (props) => {
  const headers = [
    { name: "#", className: "float-right" },
    { name: "Full Name", className: "center" },
    { name: "Email", className: "center" },
    { name: "Gender", className: "center" },
    { name: "Actions", className: "center" }
  ];

  return (
    <Table headers={headers}>
      {
        props.data.map((item,idx) => (
          <UserItem key={idx} {...item} />
        ))
      }
    </Table>
  );
}