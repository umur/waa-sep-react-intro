import {Link, Route, Routes} from "react-router-dom";
import CreateProduct from "./CreateProduct";
export default function MyRoutes(){

    return (
        <div>
            <Routes>
                <Route path="/products" element={<ProductDetail/>}>All Products</Route>
                <Route path="/products/:id/:umer" element={<CreateProduct/>}>Create Products</Route>
            </Routes>

        </div>

    )
}