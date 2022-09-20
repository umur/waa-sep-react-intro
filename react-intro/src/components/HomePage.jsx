import React from 'react'
import { Route,useNavigate } from 'react-router-dom'
import Products from './product/Products'
import Reviews from './Review/Reviews'
function HomePage() {
  const Navigate = useNavigate();
const product = () => {
    Navigate("/products")
}
const Review = () => {
    Navigate("/reviews")
}
  return (
    <div>
      <h1> Welcome to React Page!!</h1>
      <h3> Route to the Different pages using the button below </h3>
      <button onClick={product}> View Product Page</button>
      <button onClick={Review}> View Review Page </button>
    </div>
  )
}

export default HomePage
