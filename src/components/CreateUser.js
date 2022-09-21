
import { useState } from "react"
export default function CreaterUser(props){
   
    const [userState, setUserState]=useState({
        fname:'',
        lname:''
    })

   
    const onChange= (e)=>{
        setUserState({
            ...userState,
            [e.target.name]: e.target.value  
        });
    
    }

    const saveButton=(e)=>{
        console.log(userState);
    }


    return(
        <div>
            First name:<input type='text'
            value={userState.fname} 
            onChange={onChange}
            name='fname'
            />

            Last name:<input type='text'
            value={userState.lname} 
            onChange={onChange}
            name='lname'
            />

            
            

            <input type='button'
            value='Save'
            onClick={saveButton}
            />
        </div>
    )
}