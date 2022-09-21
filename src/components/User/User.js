export default function User(props) {
    return (
        <div>
            <table>
                <tr>
                    <td><p>{props.fname}</p></td>
                    <td><p>{props.lname}</p></td>
                </tr>
            </table>
            
            
            {/* <p>{props.id}</p>
            <p>{props.email}</p>
            <p>{props.password}</p> */}
        </div>
    )
}