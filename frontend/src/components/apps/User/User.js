import React, { useState } from 'react';
import { UserCreate } from './UserCreate/UserCreate';
import { UserList } from './UserList/UserList';

const initialUser = [{
  "id": 1,
  "email": "adam.smith@miu.edu",
  "password": "1234",
  "first_name": "Adam",
  "last_name": "Smith",
  "gender": "male",
  "id_address": 1
}, {
  "id": 2,
  "email": "thi.truong@miu.edu",
  "password": "1234",
  "first_name": "Thi",
  "last_name": "Truong",
  "gender": "female",
  "id_address": 12
}, {
  "id": 3,
  "email": "peter.pan@miu.edu",
  "password": "1234",
  "first_name": "Peter",
  "last_name": "Pan",
  "gender": "male",
  "id_address": 3
  }];

export const User = () => {
  const [data, setData] = useState(initialUser);
  return (
    <div>
      <div className='b-divider'></div>
      <h2>User</h2>
      <UserCreate />
      <UserList data={data} />
    </div>
  )
};