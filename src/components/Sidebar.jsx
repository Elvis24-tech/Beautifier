import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItem = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition
    ${
      location.pathname === path
        ? "bg-amber-300 text-black"
        : "text-black hover:bg-amber-300/40"
    }`;

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="lg:hidden flex items-center justify-between bg-amber-200 p-4 border-b border-amber-300">
        <div>
          <h1 className="font-black text-black">Beautifier</h1>
          <p className="text-black text-xs">Admin</p>
        </div>

        <button className="text-black text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed lg:static top-0 left-0 z-50 h-screen w-64
          bg-amber-200 border-r border-amber-300
          flex flex-col transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-6 border-b border-amber-300">
          <h1 className="text-2xl font-black text-black">Beautifier</h1>
          <p className="text-black text-xs">Admin Console</p>
        </div>

        <div className="flex flex-col gap-2 p-3 flex-1">
          <Link to="/admin/dashboard" className={navItem("/admin/dashboard")}>
            📊 Dashboard
          </Link>

          <Link to="/admin/products" className={navItem("/admin/products")}>
            🛍 Products
          </Link>

          <Link to="/admin/orders" className={navItem("/admin/orders")}>
            📦 Orders
          </Link>

          <Link to="/buyer" className="mt-auto px-4 py-3 text-black hover:bg-amber-300 rounded-xl">
            ⬅ Back to Store
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;