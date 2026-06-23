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

import AdminLogin from "./pages/AdminLogin";
import Register from "./pages/Register";

import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/buyer" replace />} />

        {/* Buyer Routes */}
        <Route path="/buyer" element={<BuyerLanding />} />
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/buyer/cart" element={<Cart />} />
        <Route path="/buyer/wishlist" element={<Wishlist />} />
        <Route path="/buyer/checkout" element={<Checkout />} />

        {/* Authentication Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLanding />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <Products />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <Orders />
            </AdminRoute>
          }
        />

        {/* Catch All */}
        <Route path="*" element={<Navigate to="/buyer" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;