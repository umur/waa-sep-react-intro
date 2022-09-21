import {useEffect, useState} from "react";
import axios from "axios";

export default function Review(){
    const initialState = [
        {
            "id": 1,
            "comment": "Good product"
        },
        {
            "id": 2,
            "comment": "Loved it"
        }
    ]
    const [reviewState, setReviewState] = useState(initialState);
    const getReview = async () =>{
        const result = await axios.get("http://localhost:4042/reviews")
        setReviewState(result.data);
        // console.log(result.data)
    }

    useEffect(()=>{
        getReview();
    },[])
    // console.log(todoState);

    return(
        <div>
            <h2>Reviews List:</h2>
            <h4>Id :{reviewState[0].id}</h4>
            <h4>Comment : {reviewState[0].id}</h4>
            *************************************
        </div>
    )

}