import React, { useState } from 'react';
import { Button } from 'components/bases/Button/Button';
import { Input } from 'components/bases/Input/Input';
import { Card } from 'components/bases/Card/Card';

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
      <Card title='Category Create Form'>
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
      </Card>
    </div>
  );
}