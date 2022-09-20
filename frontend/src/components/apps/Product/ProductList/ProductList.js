import React from 'react';
import { ProductItem } from '../ProductItem/ProductItem';

export const ProductList = (props) => {
  return (
    <div className='bd-example-snippet bd-code-snippet'>
      <div className='bd-example'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.map(item => {
                return (
                  <ProductItem {...item} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}