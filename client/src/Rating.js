import axios from "axios";
import { useEffect, useState } from "react";

export default function Rating(props) {
    const [ratingState, setRatingState] = useState({
        id: 1,
        name: "Default",
        price: 0,
        rating: 0
    });

    const fetchProduct = async (id) => {
        const result = await axios.get(`http://localhost:8080/products/${id}`);
        setRatingState(result.data);
    }

    useEffect(() => {
        fetchProduct(props.selectedProductId);
    }, [props.selectedProductId]);

    return (
        <div>
            <h1>Product Rating</h1>
            <p>{ratingState.rating}</p>
        </div>
    )
}