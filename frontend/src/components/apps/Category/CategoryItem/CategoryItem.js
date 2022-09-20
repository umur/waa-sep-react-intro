import React from 'react';

export const CategoryItem = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>
        <button type='button' className='btn btn-outline-info'>Edit</button>
        <button type='button' className='btn btn-outline-danger'>Delete</button>
      </td>
    </tr>
  );
}
