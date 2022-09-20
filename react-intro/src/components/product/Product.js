import React from 'react'

function Product(props) {
  return (
    <div>
         <table>
            <thead><th>Name</th><th>Price</th><th>Rating</th></thead> 
       {props.data.map((product)=>{
            return(
                <tr><td>{product.name}</td><td>{product.price}</td><td>{product.rating}</td></tr>
            )
        })

        }
        </table>
    </div>
  )
}

export default Product
