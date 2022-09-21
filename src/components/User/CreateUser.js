
import { useState } from "react";


export default function CreateUser(props) {

    const [userState, setUserState] = useState({

        fname:'default',
        lname:'default'


    });

    const onChanged = (e) =>{
            setUserState({
                ...userState,
                [e.target.name]: e.target.value
            });
    }
    
    const onSaveButtonClicked = () => {
        console.log(userState);
    }
    return(
        <div>
            Fname: <input type = 'text'
            value = {userState.fname}
            onChange={onChanged}
            name='fname'
            />

            Lname: <input type = 'text'
            value = {userState.lname}
            onChange={onChanged}
            name='lname'
            />  

            <input type= 'button'
            value = "Save"
            onClick={onSaveButtonClicked}
            />
        </div>
    )
}








