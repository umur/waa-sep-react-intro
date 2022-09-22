import React from 'react'
import { useNavigate } from 'react-router';

export default function Products() {
  const navigate = useNavigate();

  const onClicked = () =>{
    navigate('/product/8');
  }

  return (
    <>
    <div>Products</div>
    <input onClick={onClicked} type='button' value='Details' />
    </>
  )
}
