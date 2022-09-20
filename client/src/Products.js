import Product from "./Product";

export default function Products(props) {
  return (
    <div>
      <h1>Product</h1>
      <ol>
        {
          props.products.map((product) => {
            return (
              <Product
                key={product.id}
                setSelectedProductId={props.setSelectedProductId}
                {...product}
              />
            )
          })
        }
      </ol>

      <input type="text" placeholder="Product name" />
      <input type="submit" value="Create" />
      <hr />
    </div>
  )
}