import React from 'react';
import { Button } from '../../../bases/Button/Button';

export const CategoryItem = (props) => {
  return (
    <tr>
      <td className='float-right'>{props.id}</td>
      <td className='center'>{props.name}</td>
      <td className='center'>
        <Button type='button' className='btn-outline-info'>Edit</Button>
        <Button type='button' className='btn-outline-danger'>Delete</Button>
      </td>
    </tr>
  );
}
