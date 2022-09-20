import { useEffect, useState } from "react";
import { API } from "../API";

export default function ProductList() {

    const [productListState, setProductListState] = useState([]);

    const getProducts = async () => {
        const products = await API.get('/products');
        setProductListState(products.data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className="product-list shadow-lg">
            <div className="lead mb-0">Product List</div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    productListState.map((prod, index) => {
                        return (
                            <tr key={prod.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td>{prod.rating}</td>
                                <td><i className="bi-cart-plus cart-icon btn-cart" data-product-id={prod.id}></i></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}