export default function Product(props) {
    return (
        <div>
        <h1>Product</h1>
        <h2>{props.match.params.id}</h2>
        </div>
    );
}