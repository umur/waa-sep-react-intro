import { useState } from "react";
import { API } from "../API";
import { saveToken } from "../Utils";

export default function Login() {

    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    });

    const authenticate = async () => {
        const response = await API.post('/uaa', {...loginState});
        if(response.data.accessToken) {
            saveToken(response.data.accessToken);
        }
    }

    const onChanged = (e) => {
        setLoginState({...loginState,
            [e.target.name]: e.target.value
        })
    }


    return (
           <>
               <div>
                   <div className="form-item">
                       <label htmlFor="email">Email: </label>
                       <input id="email" type="text" name="email" className="required" autoComplete="off" onChange={onChanged} />
                   </div>
                   <div className="form-item">
                       <label htmlFor="password">Password: </label>
                       <input id="password" type="password" name="password" className="required" autoComplete="off" onChange={onChanged} />
                   </div>
               </div>
               <button id="btn-login" className="btn btn-primary btn-login" onClick={authenticate}>Login</button>
           </>
    )
}