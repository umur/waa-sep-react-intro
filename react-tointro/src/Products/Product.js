export default function Product(props) {
  const onShowDetailsClicked = (id) => {
      props.setSelectedProductId(id);
  } 
  return (
    <div>
       
        {/* <p>Product Id {props.id}  </p> */}
        <p>Product Name {props.name} </p>
        <p> Product Price {props.price} </p>
        {/* <p> Product rating {props.rating}</p> */}
        <input type='button' value ='Show Details' onClick={() => {onShowDetailsClicked(props.id)}} />
    </div>
  );
}
