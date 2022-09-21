import React, { useState } from 'react';
import { Button } from '../../../bases/Button/Button';
import { Card } from '../../../bases/Card/Card';
import { Input } from '../../../bases/Input/Input';
import { Radio } from '../../../bases/Radio/Radio';
import { Select } from '../../../bases/Select/Select';

export const UserCreate = (props) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '', password: '', gender: 'female' });
  const [selectedValue, setSelectedValue] = useState('female');
  
  const onChange = (evt) => {
    setUser({
      ...user,
      [evt.target.name]: evt.target.value
    });
  }
  const onSelectedChange = (evt) => {
    setUser({
      ...user,
      [evt.target.name]: evt.target.value
    });
    setSelectedValue(evt.target.value);
  }
  const saveHandler = () => {
    console.log('saveHandler', user);
  }

  return (
    <div className='form col-4'>
      <Card title='User Create From'>
        <Input
          type='text'
          name='first_name'
          id='first_name'
          floating={true}
          label='First Name'
          value={user.first_name}
          changed={onChange}
        />
        <Input
          type='text'
          name='last_name'
          id='last_name'
          floating={true}
          label='Last Name'
          value={user.last_name}
          changed={onChange}
        />
        <Input
          type='text'
          name='email'
          id='email'
          floating={true}
          label='Email'
          value={user.email}
          changed={onChange}
        />
        <Input
          type='password'
          name='password'
          id='password'
          floating={true}
          label='Password'
          value={user.password}
          changed={onChange}
        />
        <Select
          id='gender'
          name='gender'
          floating={true}
          value={selectedValue}
          changed={onSelectedChange}
          label='Gender'
          options={[{value: 'female'},{value: 'male'}]}
        />
        
        <Button
          type='button'
          className='btn-outline-primary'
        clicked={saveHandler}>Save</Button>
      </Card>
    </div>
  );
}