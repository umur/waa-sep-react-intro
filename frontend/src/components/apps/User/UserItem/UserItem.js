import React from 'react'

export const UserItem = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.first_name} {props.last_name}</td>
      <td>{props.email}</td>
      <td>{props.gender}</td>
      <td>
        <button type='button' className='btn btn-outline-info'>Edit</button>
        <button type='button' className='btn btn-outline-danger'>Delete</button>
      </td>
    </tr>
  );
}