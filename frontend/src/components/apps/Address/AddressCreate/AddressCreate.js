import React, { useState } from 'react';
import { Button } from '../../../bases/Button/Button';
import { Input } from '../../../bases/Input/Input';

export const AddressCreate = (props) => {
  const [address, setAddress] = useState({street: '', city: '', zip: ''});

  const onChange = (evt) => {
    setAddress({
      ...address,
      [evt.target.name]: evt.target.value
    });
  }

  const saveHandler = () => {
    console.log('saveHandler', address);
  }
  
  return (
    <div className='form col-4'>
      <h3>Address Create Form</h3>
      <Input
        type="text"
        name="street"
        id="street"
        floating={true}
        value={address.street}
        label='Street'
        changed={onChange}
      />
      <Input
        type="text"
        name="city"
        id="city"
        floating={true}
        value={address.city}
        label='City'
        changed={onChange}
      />
      <Input
        type="text"
        name="zip"
        id="zip"
        floating={true}
        value={address.zip}
        label='Zip'
        changed={onChange}
      />
      <Button
        className='btn-outline-primary'
        type='button'
        clicked={saveHandler}
      >Save</Button>
    </div>
  );
}
