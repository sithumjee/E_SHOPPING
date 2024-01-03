// https://github.com/sithumjee/E_SHOPPING.git

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/women" element={<ShopCategory />} />
          <Route path="/kids" element={<ShopCategory />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/:id\" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
