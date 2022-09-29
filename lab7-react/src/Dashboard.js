import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Link to="/products">All Products</Link> |{" "}
      <Link to="/create-product">Create Product</Link> |{" "}
      <Link to="/counter">Counter</Link>
    </div>
  );
}
