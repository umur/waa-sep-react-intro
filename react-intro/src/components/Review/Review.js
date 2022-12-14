import React,{useState} from 'react'

function Review(props) {

  const changeToggle = () => {
    props.setToggle(!props.toggle);
  }
  

if(props.data.length > 0 && props.toggle){
    const products = props.data;
    
  return (
    <div>
      ##########################################################

        <h2>User review for product {props.data[0].product.name}</h2>
        <button onClick={changeToggle}>Hide/Show</button>
        <table>
            <thead><th>User Name</th><th>Comments</th></thead>
            {
                products.map((product)=>{
                    return(
                    <tr><td>{product.user.email}</td><td>{product.comment}</td></tr>
                 ) })
            }
        </table>
      
      ##########################################################
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
