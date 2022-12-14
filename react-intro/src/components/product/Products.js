import Axios from 'axios'
import Product from './Product'
import { UserContext,useState,useEffect }  from 'react'
function Products() {
const [products,setProducts] = useState([])
        useEffect(() =>{Axios.get("http://localhost:8082/products")
                    .then((response)=>{setProducts(response.data)
                          console.log(response.data)
                      })
                    .catch((error)=>{console.log(error)})
    },[])
  return (
    <div>
        <h1>Products</h1>
            {products.map((product)=>{
              return(
            <Product 
              {...product}
             />
              )
             
      })}
    </div>
  )
}

export default Products
