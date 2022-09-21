import React from 'react';
import { Button } from '../../../bases/Button/Button';

export const UserItem = (props) => {
  return (
    <tr>
      <td className='float-right'>{props.id}</td>
      <td className='center'>{props.first_name} {props.last_name}</td>
      <td className='center'>{props.email}</td>
      <td className='center'>{props.gender}</td>
      <td className='center'>
        <Button type='button' className='btn-outline-info'>Edit</Button>
        <Button type='button' className='btn-outline-danger'>Delete</Button>
      </td>
    </tr>
  );
}