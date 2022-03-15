import "./App.css";

import { Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Searchbar from "./components/Searchbar.js";
import Home from "./pages/Home.js";
// import AllProducts from "./pages/AllProducts.js";
import Cart from "./pages/Cart.js";
import MyOrder from "./pages/MyOrder.js";
import Product from "./components/Product.js";
import OrderDetail from "./components/OrderDetail.js";
// import ProductList from "./components/ProductList.js";
import FilteredResults from "./pages/FilteredResults";
import ProductData from "./data/products.json";

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        {/* <Navbar /> */}
        <p>assessment</p>
        <Searchbar placeholder="Enter your search term" data={ProductData} />
      </div>

      {/* <Route path="/home" exact component={Home} /> */}

      {/* <Route path="/results" exact component={FilteredResults} />

      <Route path="/cart" exact component={Cart} />

      <Route path="/myorder" exact component={MyOrder} />

      <Route path="/product/:id" exact component={Product} />

      <Route path="/order/:id" exact component={OrderDetail} /> */}
    </div>
  );
}

export default App;
