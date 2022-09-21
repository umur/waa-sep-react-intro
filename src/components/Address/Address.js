export default function Adress (props) {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.street}</p>
            <p>{props.zip}</p>
            <p>{props.city}</p>
        </div>
    )
}