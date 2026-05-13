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

import Login from "./pages/Login";
import Register from "./pages/Register";

const isAuthenticated = () => {
  return !!localStorage.getItem("access");
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl font-black">
      404 - Page Not Found
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/buyer" />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* BUYER */}
        <Route path="/buyer" element={<BuyerLanding />} />
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/buyer/cart" element={<Cart />} />
        <Route path="/buyer/wishlist" element={<Wishlist />} />
        <Route path="/buyer/checkout" element={<Checkout />} />

        {/* SELLER / ADMIN ENTRY */}
        <Route path="/seller" element={<AdminLanding />} />

        {/* PROTECTED ADMIN */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;