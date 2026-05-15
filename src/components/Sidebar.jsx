import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const navItem = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition
    ${
      location.pathname === path
        ? "bg-amber-300 text-black"
        : "text-black hover:bg-amber-300/40"
    }`;

  function handleLogout() {
    setLoggingOut(true);

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");

    setTimeout(() => {
      setOpen(false);
      navigate("/buyer");
    }, 2000);
  }

  return (
    <>
      <div className="lg:hidden flex items-center justify-between bg-amber-200 p-4 border-b border-amber-300">
        <div>
          <h1 className="font-black text-black">Beautifier</h1>
          <p className="text-black text-xs">Admin</p>
        </div>

        <button
          className="text-black text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
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
            Dashboard
          </Link>

          <Link to="/admin/products" className={navItem("/admin/products")}>
            Products
          </Link>

          <Link to="/admin/orders" className={navItem("/admin/orders")}>
            Orders
          </Link>

          <Link
            to="/buyer"
            className="mt-auto px-4 py-3 text-black hover:bg-amber-300 rounded-xl transition font-semibold"
          >
            Back to Store
          </Link>
          <button
            onClick={handleLogout}
            className="mt-2 px-4 py-3 bg-amber-300 text-black rounded-xl font-black hover:bg-amber-400 hover:scale-105 transition"
          >
            Logout
          </button>
        </div>
      </div>
      {loggingOut && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-amber-100 border border-amber-300 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-52 h-52 bg-amber-300/50 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-amber-400/40 blur-[140px] rounded-full"></div>
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-amber-300 border-t-black rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-4 border-black border-b-amber-400 rounded-full animate-[spin_1.2s_linear_infinite_reverse]"></div>
              </div>
            </div>

            <h2 className="text-2xl font-black text-black uppercase">
              Logging Out
            </h2>

            <p className="text-black/60 mt-2 text-sm">
              Redirecting to store...
            </p>

            <div className="mt-5 h-1 w-full bg-amber-200 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-black rounded-full animate-[loading_1.2s_ease-in-out_infinite]"></div>
            </div>

            <style>{`
              @keyframes loading {
                0% { transform: translateX(-100%); }
                50% { transform: translateX(200%); }
                100% { transform: translateX(-100%); }
              }
            `}</style>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;