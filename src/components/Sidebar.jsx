import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const navItem = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
    ${
      location.pathname === path
        ? "bg-white text-gray-900 shadow-sm"
        : "text-white/80 hover:text-white hover:bg-white/10"
    }`;

  return (
    <div className="w-full md:w-64 min-h-screen bg-linear-to-b from-pink-600 via-pink-700 to-purple-800 text-white flex flex-col">

      {/* TOP SECTION */}
      <div className="p-6">

        {/* Brand */}
        <h1 className="text-xl font-bold tracking-tight">
          BeautyShop
        </h1>

        <p className="text-white/60 text-xs mt-1">
          Admin Console
        </p>

        {/* Divider */}
        <div className="mt-6 border-t border-white/10" />
      </div>

      {/* NAVIGATION */}
      <div className="px-3 flex flex-col gap-1">

        <Link to="/admin/dashboard" className={navItem("/admin/dashboard")}>
          📊 Dashboard
        </Link>

        <Link to="/admin/products" className={navItem("/admin/products")}>
          🛍 Products
        </Link>

        <Link to="/admin/orders" className={navItem("/admin/orders")}>
          📦 Orders
        </Link>

      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-auto p-6">

        <div className="bg-white/10 rounded-xl p-4">
          <p className="text-xs text-white/60">
            BeautyShop Pro Admin
          </p>

          <p className="text-sm font-medium mt-1">
            Manage your store efficiently
          </p>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;