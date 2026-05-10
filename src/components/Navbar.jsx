import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/40">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-6 md:px-10 py-4">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-black text-gray-800 text-center sm:text-left">
          Beauty<span className="text-pink-500">Shop</span>
        </h1>

        {/* Links */}
        <div className="flex justify-center sm:justify-end gap-3">

          <Link
            to="/buyer"
            className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition"
          >
            Shop
          </Link>

          <Link
            to="/admin"
            className="bg-white/60 backdrop-blur-xl border border-white/40 text-gray-700 px-5 py-2 rounded-full shadow hover:bg-white transition"
          >
            Admin
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;