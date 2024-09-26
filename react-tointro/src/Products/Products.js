import Product from "./Product";

export default function Products(props) {
  return props.Products.map((item) => {
    return (
        <Product
         {...item}
         setSelectedProductId = {props.setSelectedProductId}
         />
        
    )
  })
}
