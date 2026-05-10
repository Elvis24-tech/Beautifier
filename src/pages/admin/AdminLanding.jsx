import { Link } from "react-router-dom";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

function AdminLanding() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 via-white to-pink-50">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 bg-white shadow-md">

        <h1 className="text-3xl font-bold text-pink-600">
          BeautyShop Admin
        </h1>

        <Link
          to="/admin/dashboard"
          className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-full shadow-lg"
        >
          Enter Dashboard
        </Link>

      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-16 items-center px-6 md:px-10 py-20">

        {/* Left */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
            Manage Your
            <span className="text-pink-500"> Beauty Store</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Control products, track orders, monitor sales,
            and grow your beauty business with a modern dashboard.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              to="/admin/dashboard"
              className="bg-pink-500 hover:bg-pink-600 transition text-white px-8 py-4 rounded-full shadow-lg"
            >
              Open Dashboard
            </Link>

            <button className="border border-pink-500 text-pink-500 hover:bg-pink-100 transition px-8 py-4 rounded-full">
              Learn More
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt="Admin Dashboard"
            className="rounded-3xl shadow-2xl w-full max-w-137.5 object-cover"
          />

        </div>

      </section>

      {/* Features */}
      <section className="px-6 md:px-10 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

            <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center">
              <FaBoxOpen className="text-pink-500 text-2xl" />
            </div>

            <h2 className="text-2xl font-bold mt-6">
              Product Management
            </h2>

            <p className="text-gray-600 mt-4">
              Add, edit, and organize beauty products easily.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

            <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center">
              <FaShoppingCart className="text-pink-500 text-2xl" />
            </div>

            <h2 className="text-2xl font-bold mt-6">
              Order Tracking
            </h2>

            <p className="text-gray-600 mt-4">
              Monitor customer purchases and manage deliveries.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

            <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center">
              <FaChartLine className="text-pink-500 text-2xl" />
            </div>

            <h2 className="text-2xl font-bold mt-6">
              Sales Analytics
            </h2>

            <p className="text-gray-600 mt-4">
              Track store performance and revenue growth.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AdminLanding;