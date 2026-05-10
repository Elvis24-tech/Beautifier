import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-pink-600 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold">
        Admin
      </h1>

      <div className="mt-10 flex flex-col gap-4">

        <Link
          to="/admin/dashboard"
          className="hover:bg-pink-500 p-3 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="hover:bg-pink-500 p-3 rounded-lg"
        >
          Products
        </Link>

        <Link
          to="/admin/orders"
          className="hover:bg-pink-500 p-3 rounded-lg"
        >
          Orders
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;