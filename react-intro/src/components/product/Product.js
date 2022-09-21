import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Review from '../Review/Review';

function Product(props) {

  const [reviews,setReviews] = useState([])
  const [selectedId,setSelectedID] = useState(0);
  const openReview = (id) => {
      setSelectedID(id)
      axios.get(`http://localhost:8082/products/reviews/${id}`)
           .then((response)=> {setReviews(response.data)
            console.log(reviews)
          })
          
   }
  return (
    <div>
          <h5> Product Name  :{props.name}</h5>
          <h5>Product Price  :{props.price}</h5>
          <h5>Product Rating :{props.rating}</h5>   
          <button onClick={()=>openReview(props.id)}> See Reviews</button>******************************
          {(reviews.length > 0 && props.id == selectedId )? 
          <div>
              <Review data={reviews} />
                
          </div>
           :<div>

           </div> }
    </div>
  )
}

export default Product
