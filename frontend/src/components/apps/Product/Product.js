import React, { useState } from 'react';
import { ProductCreate } from './ProductCreate/ProductCreate';
import { ProductList } from './ProductList/ProductList';

const initialProduct = [{
  "id": 1,
  "name": "Product B",
  "price": 200,
  "rating": 3,
  "category_id": 1,
  "user_id": 2
}, {
  "id": 2,
  "name": "Product B",
  "price": 101,
  "rating": 4,
  "category_id": 3,
  "user_id": 2
}, {
  "id": 3,
  "name": "Product C",
  "price": 150,
  "rating": 1,
  "category_id": 2,
  "user_id": 2
}];

export const Product = () => {
  
  const [data, setData] = useState(initialProduct);
  
  return (
  <div>
      <div className='b-divider'></div>
      <h2>Product</h2>
      <ProductCreate />
      <ProductList data={data} />
    </div>
  )
}