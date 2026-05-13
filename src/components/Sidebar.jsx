import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItem = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
    ${
      location.pathname === path
        ? "bg-white/20 text-white"
        : "text-white/80 hover:text-white hover:bg-white/10"
    }`;

  return (
    <>
      <div className="lg:hidden sticky top-0 z-50 bg-linear-to-r from-pink-600 via-pink-700 to-purple-800 px-4 py-4 flex items-center justify-between shadow-md">
        <div>
          <h1 className="text-white font-bold text-lg">BeautyShop</h1>
          <p className="text-white/60 text-xs">Admin Console</p>
        </div>

        <button onClick={() => setOpen(!open)} className="text-white text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-64
          bg-linear-to-b from-pink-600 via-pink-700 to-purple-800
          text-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="p-6">
          <div className="flex items-center justify-between lg:block">
            <div>
              <h1 className="text-2xl font-bold">Beautifier</h1>
              <p className="text-white/60 text-xs mt-1">Admin Console</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="lg:hidden text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="mt-6 border-t border-white/10" />
        </div>
        <div className="px-3 flex flex-col gap-2 flex-1">
          <Link
            to="/admin/dashboard"
            className={navItem("/admin/dashboard")}
            onClick={() => setOpen(false)}
          >
            📊 Dashboard
          </Link>

          <Link
            to="/admin/products"
            className={navItem("/admin/products")}
            onClick={() => setOpen(false)}
          >
            🛍 Products
          </Link>

          <Link
            to="/admin/orders"
            className={navItem("/admin/orders")}
            onClick={() => setOpen(false)}
          >
            📦 Orders
          </Link>
          <div className="mt-auto pb-6">
            <Link
              to="/buyer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition"
              onClick={() => setOpen(false)}
            >
              ⬅ Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;