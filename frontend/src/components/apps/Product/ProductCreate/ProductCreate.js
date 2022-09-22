import React, { useState } from 'react';
import { Button } from 'components/bases/Button/Button';
import { Card } from 'components/bases/Card/Card';
import { Input } from 'components/bases/Input/Input';

export const ProductCreate = (props) => {
  const [product, setProduct] = useState({ name: '', price: 0, rating: 0 });

  const onChange = (evt) => {
    setProduct({
      ...product,
      [evt.target.name]: evt.target.value
    });
  }

  const saveHandler = () => {
    console.log('saveHandler', product);
  }

  return (
    <div className='form col-4'>
      <Card title='Product Create From'>
        <Input
          type='text'
          name='name'
          id='name'
          floating={true}
          value={product.name}
          label='Name'
          changed={onChange}
        />
        <Input
          type='number'
          name='price'
          id='price'
          floating={true}
          value={product.price}
          label='Price'
          changed={onChange}
        />
        <Input
          type='number'
          name='rating'
          id='rating'
          floating={true}
          value={product.rating}
          label='Rating'
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