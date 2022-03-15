import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Home from "./pages/Home";
// import AllProducts from "./pages/AllProducts.js";
import Cart from "./pages/Cart";
import MyOrder from "./pages/MyOrder";
import Product from "./components/Product";
import OrderDetail from "./components/OrderDetail";
// import ProductList from "./components/ProductList.js";
import FilteredResults from "./pages/FilteredResults";
import ProductData from "./data/products.json";

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
        <Searchbar placeholder="Enter your search term" data={ProductData} />
      </div>

      {/* <Route path="/home" exact component={Home} /> */}
      <Routes>
      <Route path="/results" exact component={FilteredResults} /> */

      <Route path="/cart" exact component={Cart} />

      <Route path="/myorder" exact component={MyOrder} />

      <Route path="/product/:id" exact component={Product} />

      <Route path="/order/:id" exact component={OrderDetail} />
      </Routes>
    </div>
  );
}

export default App;
