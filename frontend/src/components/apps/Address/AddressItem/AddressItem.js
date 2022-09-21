import React from 'react';
import { Button } from '../../../bases/Button/Button';
import { Spinner } from '../../../bases/Spinner/Spinner';

export const AddressItem = (props) => {
  return (
    <tr>
      <td className='float-right'>{props.id}</td>
      <td className='center'>{props.street}</td>
      <td className='center'>{props.city}</td>
      <td className='center'>{props.zip}</td>
      <td className='center'>
        <Button type='button' className='btn-outline-info'>Edit</Button>
        <Button type='button' className='btn-outline-danger'>Delete</Button>
        {/* <Spinner className="text-danger" /> */}
        {/* <Button type='submit' className='btn-warning' disabled='disabled'>Disable button</Button> */}
      </td>
    </tr>
  );
}