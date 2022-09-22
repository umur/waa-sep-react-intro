import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import Dashboard from './Dashboard'
import Login from './Login'

export default function Index() {
  return (
    <>
    <div>Welcome</div>
    <p>Click Below to Login</p>
      <Link to="/login" type="button" className="btn btn-primary btn-lg btn-block">Login</Link>

      
    </>
  )
}
