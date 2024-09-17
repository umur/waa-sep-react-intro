import React, { useState } from 'react';
import { CategoryCreate } from './CategoryCreate/CategoryCreate';
import { CategoryList } from './CategoryList/CategoryList';

const initialCategory = [{
  "id": 1,
  "name": "Clothes"
}, {
  "id": 2,
  "name": "Furniture"
}, {
  "id": 3,
  "name": "Equipments"
}, {
  "id": 4,
  "name": "Electronic"
  }];

export const Category = () => {
  const [data, setData] = useState(initialCategory);
  return (
    <div>
      <div className='b-divider'></div>
      <h2>Category</h2>
      <CategoryCreate />
      <CategoryList data={data} />
    </div>
  )
}