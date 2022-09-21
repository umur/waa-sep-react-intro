import * as React from "react";
import {useState} from "react";

export default function Products() {
    const products = [
        {
            id: 1,
            name: "Product 1",
        },
        {
            id: 2,
            name: "Product 2",
        },
    ]
    const [initialProducts, setProducts] = useState(products);
    return (
        <div>Featured Products
            <ul>
                {
                    initialProducts.map( (p) =>
                        <li>{p.name}</li>)
                }
            </ul>
        </div>

    )
}
