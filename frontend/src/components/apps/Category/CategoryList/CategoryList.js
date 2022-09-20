import React from 'react';
import { CategoryItem } from '../CategoryItem/CategoryItem';

export const CategoryList = (props) => {
  return (
    <div className='bd-example-snippet bd-code-snippet'>
      <div className='bd-example'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.map(item => {
                return (
                  <CategoryItem {...item} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};