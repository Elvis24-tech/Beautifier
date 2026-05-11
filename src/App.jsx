import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import BuyerLanding from "./pages/buyer/BuyerLanding";
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import Cart from "./pages/buyer/Cart";
import Wishlist from "./pages/buyer/Wishlist";
import Checkout from "./pages/buyer/Checkout";

import AdminLanding from "./pages/admin/AdminLanding";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
      404 - Page Not Found
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Navigate to="/buyer" />} />

        {/* BUYER */}
        <Route path="/buyer" element={<BuyerLanding />} />
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/buyer/cart" element={<Cart />} />
        <Route path="/buyer/wishlist" element={<Wishlist />} />
        <Route path="/buyer/checkout" element={<Checkout />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLanding />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<Orders />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;