import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

      <h1 className="text-3xl font-bold text-pink-600">
        BeautyShop
      </h1>

      <div className="flex gap-4">

        <Link
          to="/buyer"
          className="bg-pink-500 text-white px-5 py-2 rounded-full"
        >
          Shop
        </Link>

        <Link
          to="/admin"
          className="border border-pink-500 text-pink-500 px-5 py-2 rounded-full"
        >
          Admin
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;