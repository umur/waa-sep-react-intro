export default function Product(props){
    return (
        <div>
            Name: {props.name} Category: {props.category.name} Price: {props.price} Rating: {props.rating}
        </div>
    )
}