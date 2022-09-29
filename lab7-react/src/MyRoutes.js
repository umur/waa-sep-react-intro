import AllProducts from "./AllProudcts";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<AllProducts />}></Route>
      <Route path="/products/:id" element={<EditProduct />}></Route>
      <Route path="/create-product" element={<CreateProduct />}></Route>
    </Routes>
  );
}
