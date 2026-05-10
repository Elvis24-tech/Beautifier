import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import Cart from "./pages/buyer/Cart";
import Wishlist from "./pages/buyer/Wishlist";

import AdminLanding from "./pages/admin/AdminLanding";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />

        {/* Buyer */}
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLanding />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<Orders />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;