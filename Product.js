

export default function Product(props){
    return (
        <div key={props.id}>
            <li key={props.id}>{props.name}</li>
        </div>
    )
}