import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import Review from './Review'

function Reviews() {
const[reviews,setReviews] = useState([]);
const[productId,setProductId] = useState('');

const fetchReview = () => {
        Axios.get(`http://localhost:8082/products/reviews/${productId}`)
       .then((response)=>{setReviews(response.data)
        console.log(response)    
    })
       }

  return (
    <div>
        <p>Enter product Id to view Review for this particular product</p>
      <input type='text' name='productId' onChange={(e)=>{setProductId(e.target.value)}}/>
      <button  onClick={fetchReview}>Fetch Review</button>
      <Review data={reviews}/>
   </div>
  )
}

export default Reviews
