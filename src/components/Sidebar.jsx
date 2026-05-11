import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const navItem = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
    ${
      location.pathname === path
        ? "bg-white/20 text-white"
        : "text-white/80 hover:text-white hover:bg-white/10"
    }`;

  return (
    <div className="w-full md:w-64 min-h-screen bg-linear-to-b from-pink-600 via-pink-700 to-purple-800 text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-tight">
          BeautyShop
        </h1>

        <p className="text-white/60 text-xs mt-1">
          Admin Console
        </p>

        <div className="mt-6 border-t border-white/10" />
      </div>

      {/* NAV */}
      <div className="px-3 flex flex-col gap-2">

        <Link to="/admin/dashboard" className={navItem("/admin/dashboard")}>
          📊 Dashboard
        </Link>

        <Link to="/admin/products" className={navItem("/admin/products")}>
          🛍 Products
        </Link>

        <Link to="/admin/orders" className={navItem("/admin/orders")}>
          📦 Orders
        </Link>

        {/* BACK TO HOME (CLEAN VERSION) */}
        <Link
          to="/buyer"
          className="flex items-center gap-3 px-4 py-3 mt-2 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition"
        >
          ⬅ Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;