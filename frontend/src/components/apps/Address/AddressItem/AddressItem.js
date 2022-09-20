import React from 'react'

export const AddressItem = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.street}</td>
      <td>{props.city}</td>
      <td>{props.zip}</td>
      <td>
        <button type='button' className='btn btn-outline-info'>Edit</button>
        <button type='button' className='btn btn-outline-danger'>Delete</button>
      </td>
    </tr>
  );
}