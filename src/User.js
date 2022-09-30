export default function User(props){
    return (
        <div>
            Name: {props.firstname} {props.lastname} Email: {props.email} Password: {props.password} Address: {props.address}
        </div>
    )
}