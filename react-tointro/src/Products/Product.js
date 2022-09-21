export default function Product(props) {
  return (
    <div>
      <p>
        Product Id - {props.id} Product Name - {props.name} Product Price -{" "}
        {props.price} {props.rating}{" "}
      </p>
    </div>
  );
}
// private int id;
// private String name;
// private float price;
// private int rating;
