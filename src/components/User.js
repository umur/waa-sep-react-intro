

export default function User(props){

    return(
        <div>
            <table>
                <tr>
                    <td><p>{props.fname}</p></td>
                    <td>  <p>{props.lname}</p></td>
                </tr>
            </table>
          
        </div>
    )
}