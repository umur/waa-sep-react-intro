import React from 'react';
import { AddressItem } from '../AddressItem/AddressItem';

export const AddressList = (props) => {
  return (
    <div className='bd-example-snippet bd-code-snippet'>
      <div className='bd-example'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Street</th>
              <th>City</th>
              <th>Zip</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.map(item => {
                return (
                  <AddressItem {...item} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}