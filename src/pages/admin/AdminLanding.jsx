import { Link } from "react-router-dom";

function AdminLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50">

      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-md">

        <h1 className="text-3xl font-bold text-pink-600">
          BeautyShop Admin
        </h1>

        <Link
          to="/admin/dashboard"
          className="bg-pink-500 text-white px-6 py-3 rounded-full"
        >
          Enter Dashboard
        </Link>

      </nav>

      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">

        <div>

          <h1 className="text-6xl font-bold leading-tight text-gray-800">
            Manage Your Beauty Store
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Control products, track orders, monitor sales, and grow your business.
          </p>

          <Link
            to="/admin/dashboard"
            className="inline-block mt-8 bg-pink-500 text-white px-8 py-4 rounded-full"
          >
            Open Dashboard
          </Link>

        </div>

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            className="rounded-3xl shadow-2xl w-[550px]"
          />

        </div>

      </section>

    </div>
  );
}

export default AdminLanding;