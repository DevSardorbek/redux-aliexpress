import "./sass/style.scss";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/Category";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import Admin from "./pages/admin/Admin";
function App() {
  return (
    <>
      <Navbar />
      <Category />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
