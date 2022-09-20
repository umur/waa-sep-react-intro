import React from 'react'

function Review(props) {

if(props.data.length > 0){
    const products = props.data;
    
  return (
    <div>
    
        <h2>User review for product {props.data[0].product.name}</h2>
        <table>
            <thead><th>User Name</th><th>Comments</th></thead>
            {
                products.map((product)=>{
                    return(
                    <tr><td>{product.user.email}</td><td>{product.comment}</td></tr>
                 ) })
            }
        </table>

    </div>
  )}else{
    return(
        <div>
            no Review data for this product 
        </div>
    )
  }
}

export default Review
