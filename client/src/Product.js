export default function Product(props) {
  const setProductId = (id) => {
    props.setSelectedProductId(id);
  }

  return (
    <li>{props.name} {props.price}$ <input type="button" value="RATE" onClick={() => { setProductId(props.id) }} /></li>
  )
}