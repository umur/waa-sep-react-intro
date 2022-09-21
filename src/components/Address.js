import {useEffect, useState} from "react";
import axios from "axios";

export default function Address(){
    const initialState = [
        {
            "id": 1,
            "street": "1000 N",
            "zip": 52557,
            "city": "Fairfield",
            "customer": {
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
            }
        },
        {
            "id": 2,
            "street": "100 N",
            "zip": 56347,
            "city": "Iowa",
            "customer": {
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
        }
    ]
    const [addressState, setAddressState] = useState(initialState);
    const getAddress = async () =>{
        const result = await axios.get("http://localhost:4042/addresses")
        setAddressState(result.data);
        // console.log(result.data)
    }

    useEffect(()=>{
        getAddress();
    },[])
    // console.log(todoState);

    return(
        <div>
            <h2>Address List:</h2>
            <h4>Id :{addressState[0].id}</h4>
            <h4>Street : {addressState[0].street}</h4>
            <h4>Zip : {addressState[0].zip}</h4>
            <h4>City : {addressState[0].city}</h4>
            *************************************
        </div>
    )

}