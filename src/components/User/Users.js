import User from "./User";

export default function Users(props) {
    return (
        <div>
            {
                props.users.map((item) =>  {
                 return (
                    //    <User
                    //       {...item}
                    //     />
                        <table>
                        <tr>
                            <td><p>{props.fname}</p></td>
                            <td><p>{props.lname}</p></td>
                        </tr>
                    </table>
                    )
                })
            }
        </div>
    )
}