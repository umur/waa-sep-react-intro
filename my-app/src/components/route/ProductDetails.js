import React from 'react'
import { useParams } from 'react-router'

export default function ProductDetails() {
  const param = useParams();
  return (
    <div>ProductDetails {param.id}</div>
    
  )
}
