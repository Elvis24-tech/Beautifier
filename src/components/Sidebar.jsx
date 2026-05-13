import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { logout } = useContext(AuthContext);

  const navItem = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
    ${
      location.pathname === path
        ? "bg-amber-100 text-amber-900 shadow-sm"
        : "text-amber-900/70 hover:text-amber-900 hover:bg-amber-50"
    }`;

  const handleLogout = () => {
    logout();                 // clear token + user
    setOpen(false);          // close sidebar
    navigate("/login");      // redirect to login
  };

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden sticky top-0 z-50 bg-amber-50 px-4 py-4 flex items-center justify-between shadow-sm border-b border-amber-100">
        <div>
          <h1 className="text-amber-900 font-black text-lg uppercase tracking-wide">
            Beautifier
          </h1>
          <p className="text-amber-800/60 text-xs">Admin Console</p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-amber-900 text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-64
          bg-linear-to-b from-amber-50 via-yellow-50 to-orange-50
          text-amber-900
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          border-r border-amber-100
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* HEADER */}
        <div className="p-6">
          <div className="flex items-center justify-between lg:block">
            <div>
              <h1 className="text-2xl font-black text-amber-900 uppercase tracking-wide">
                Beautifier
              </h1>
              <p className="text-amber-800/60 text-xs mt-1">
                Admin Console
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="lg:hidden text-2xl text-amber-900"
            >
              ✕
            </button>
          </div>

          <div className="mt-6 border-t border-amber-100" />
        </div>

        {/* NAV */}
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

          <div className="mt-6 border-t border-amber-100" />

          {/* FOOTER */}
          <div className="mt-auto pb-6 space-y-2">

            <Link
              to="/buyer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-amber-800 hover:text-amber-900 hover:bg-amber-100 transition"
              onClick={() => setOpen(false)}
            >
              ⬅ Back to Store
            </Link>

            {/* LOGOUT BUTTON */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-700 hover:text-red-800 hover:bg-red-50 transition"
            >
              🚪 Logout
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;