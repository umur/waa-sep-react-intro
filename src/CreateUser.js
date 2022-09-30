import { useState } from "react";

export default function CreateUser(props){
    
    const [userState, setUserState] = useState({
        firstname: 'default',
        lastname: 'default'
    });

    const onChanged = (e) => {
        setUserState ({
            ...userState,
            [e.target.name]: e.target.value
        })
    }
    
    const onSaveButtonClicked = () => {
        console.log(userState);
    }

    return (
        <div>
            First Name: <input type='text' value={useState.firstname} onChange={onChanged}/> 
            Last Name: <input type='text' value={useState.lastname} onChange={onChanged}/> <br/>
            Email : <input type='text' value={useState.email} onChange={onChanged}/>
            Password : <input type='text' value={useState.password} onChange={onChanged}/> <br/>
            Address: <input type='text' value={useState.address} onChange={onChanged}/>
            &nbsp; <input type='button' value='Save' onClick={onSaveButtonClicked} />
        </div>
    )

}