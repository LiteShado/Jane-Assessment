import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-main">
    <nav>
    <ul>
        <li><Link className="nav" to="/home">
          Home
        </Link></li>
        <li><Link className="nav" to="/results">
          All Products
        </Link></li>
        <li><Link className="nav" to="/cart">
          My Cart
        </Link></li>
        <li><Link className="nav" to="/myorder">
          My Order
        </Link></li>
      </ul>
      </nav>
    </div>
  );
};

export default Navbar;
