import React from 'react';
import { UserItem } from '../UserItem/UserItem';

export const UserList = (props) => {
  return (
    <div className='bd-example-snippet bd-code-snippet'>
      <div className='bd-example'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.map(item => {
                return (
                  <UserItem {...item} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}