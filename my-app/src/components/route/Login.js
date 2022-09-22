import React, { useState } from 'react'
import { useNavigate } from 'react-router'


export default function Login() {
  const [detail, setDetail] = useState({email:'john@miu.edu', password:'123'})
  const nav = useNavigate();
  const submit = () => {
    nav('/dashboard');
  }
  return (
    <>
      <form className="container">
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={detail.email} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={detail.password} />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" >Check me out</label>
        </div>
        <a onClick={submit} type="submit" className="btn btn-primary">Submit</a>
      </form>
    </>
  )
}
