import {useEffect, useState} from "react";
import axios from "axios";

export default function User(){
    const initialState = [
        {
            "id": 1,
            "email": "uinan@miu.edu",
            "password": "$2a$12$IKEQb00u5QpZMx4v5zMweu.3wrq0pS7XLCHO4yHZ.BW/yvWu1feo2",
            "firstName": "umur",
            "lastName": "inan",
            "reviews": [
                {
                    "id": 1,
                    "comment": "Good product"
                }
            ]
        },
        {
            "id": 2,
            "email": "john@miu.edu",
            "password": "$2a$12$IKEQb00u5QpZMx4v5zMweu.3wrq0pS7XLCHO4yHZ.BW/yvWu1feo2",
            "firstName": "john",
            "lastName": "doe",
            "reviews": [
                {
                    "id": 2,
                    "comment": "Loved it"
                }
            ]
        }
    ]
    const [userState, setUserState] = useState(initialState);
    const getUsers = async () =>{
        const result = await axios.get("http://localhost:4042/customers/1")
        setUserState(result.data);
        // console.log(result.data)
    }

    useEffect(()=>{
        getUsers();
    },[])
    // console.log(todoState);

    return(
        <div>
            <h2>Users List:</h2>
            <h4>User Id :{userState.id}</h4>
            <h4>email : {userState.email}</h4>
            <h4>first_name : {userState.firstName}</h4>
            <h4>last_name : {userState.lastName}</h4>
            *************************************
        </div>
    )

}