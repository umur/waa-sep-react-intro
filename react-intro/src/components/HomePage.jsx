import React from 'react'
import { useState,useContext } from 'react'
import { Route,useNavigate } from 'react-router-dom'
import Products from './product/Products'
import Reviews from './Review/Reviews'
import { UserContext } from './UserContext'
function HomePage() {
  const [data,setData] = useState("this is from context");
  const Navigate = useNavigate();
const product = () => {
    Navigate("/products")
}
const Review = () => {
    Navigate("/reviews")
}
const Category =() =>{
  Navigate("/categories")
}
  return (
    <UserContext.Provider value={"use context"}>
    <div>
      
      <h1> Welcome to React Page!!</h1>
      <h5>{data}</h5>
      <h3> Route to the Different pages using the button below </h3>
      <button onClick={product}> View Product Page</button>
      <button onClick={Review}> View Review Page </button>
      <button onClick={Category}>View Category Page</button>
    </div>
    </UserContext.Provider>
  )
}

export default HomePage
