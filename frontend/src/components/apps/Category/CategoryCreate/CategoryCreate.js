import React, { useState } from 'react';
import { Button } from '../../../bases/Button/Button';
import { Input } from '../../../bases/Input/Input';

export const CategoryCreate = (props) => {
  const [category, setCategory] = useState({ name: '' });
  
  const onChange = (evt) => {
    setCategory({
      ...category,
      [evt.target.name]: evt.target.value
    });
  }

  const saveHandler = () => {
    console.log('saveHandler', category);
  }

  return (
    <div className='form col-4'>
      <h3>Category Create Form</h3>
      <Input
        type="text"
        name="name"
        id="name"
        floating={true}
        value={category.name}
        label='Name'
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