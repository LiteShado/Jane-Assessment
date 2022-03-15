import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navv">
      <Link className="nav-link" to="/home">
        Home
      </Link>
      <Link className="nav-link" to="/results">
        All Products
      </Link>
      <Link className="nav-link" to="/cart">
        My Cart
      </Link>
      <Link className="nav-link" to="/myorder">
        My Order
      </Link>
    </div>
  );
};

export default Navbar;
