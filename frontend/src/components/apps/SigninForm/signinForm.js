import React, { useState } from "react";
import signinLogo from "images/yicon.svg";
import "./SigninForm.css";
import { Card } from "components/bases/Card/Card";
import { Input } from "components/bases/Input/Input";
import { Checkbox } from "components/bases/Checkbox/Checkbox";
import { Button } from "components/bases/Button/Button";

export const SigninForm = (props) => {
  const [signinData, setSigninData] = useState({ email: '', password: '', remember: false });

  const onChange = (evt) => {
    if (evt.target.name === 'remember') {
      setSigninData({
        ...signinData,
        remember: !signinData.remember
      })
    } else {
      setSigninData({
        ...signinData,
        [evt.target.name]: evt.target.value
      });
    }
  }

  const signIn = () => { }
  const signUp = () => {}

  return (
    <main className="form-signin w-100 m-auto">
      <Card>
        <img className="mb-4" src={signinLogo} alt="" width="72" height="57"></img>
        <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>

        <Input
          floating={true}
          type='email'
          name='email'
          id='email'
          value={signinData.email}
          label='Email'
          changed={onChange}
        />
        <Input
          type='password'
          name='password'
          id='password'
          floating={true}
          value={signinData.password}
          label='Password'
          changed={onChange}
        />
        <Checkbox
          value={signinData.remember}
          id='remember'
          name='remember'
          checked={signinData.remember ? true : false}
          changed={onChange}
        >Remember me</Checkbox>
        <Button
          type='button'
          className='btn-primary w-100'
          clicked={signIn}
        >Sign in</Button>
        <Button
          type='button'
          className='btn-outline-primary w-100'
          clicked={signUp}
        >Sign up</Button>
      </Card>
    </main>
  );
}
