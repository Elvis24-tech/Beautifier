import { Link } from "react-router-dom";

function AdminLanding() {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100 relative overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute top-40 -right-24 w-96 h-96 bg-purple-300/20 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-rose-200/30 blur-[150px] rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-6 md:px-10 py-6">

        <h1 className="text-2xl md:text-3xl font-black text-gray-800">
          BeautyShop <span className="text-pink-500">Admin</span>
        </h1>

        <Link
          to="/admin/dashboard"
          className="w-full sm:w-auto text-center bg-linear-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          Enter Dashboard
        </Link>

      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-10 py-10 md:py-16 items-center">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          <p className="text-pink-500 tracking-[4px] md:tracking-[6px] uppercase text-xs md:text-sm font-semibold">
            Control Center
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-gray-800 leading-tight mt-2">
            Run Your
            <br />
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Beauty Empire
            </span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg">
            Manage products, track orders, and analyze sales from one powerful admin dashboard designed for modern beauty brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

            <Link
              to="/admin/dashboard"
              className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:scale-105 transition text-center"
            >
              Open Dashboard
            </Link>

            <button className="bg-white/60 backdrop-blur-xl border border-white/40 px-6 md:px-8 py-3 md:py-4 rounded-full shadow hover:bg-white transition">
              Preview
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt="Admin Dashboard"
            className="rounded-3xl shadow-2xl w-full max-w-96 object-cover"
          />

        </div>

      </section>

      {/* FEATURE SECTION */}
      <section className="relative z-10 px-6 md:px-10 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

        <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-6 md:p-8 shadow-lg hover:-translate-y-2 transition">
          <h2 className="font-bold text-lg md:text-xl">Product Control</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Manage your entire catalog easily.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-6 md:p-8 shadow-lg hover:-translate-y-2 transition">
          <h2 className="font-bold text-lg md:text-xl">Order System</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Track every customer order in real time.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-6 md:p-8 shadow-lg hover:-translate-y-2 transition">
          <h2 className="font-bold text-lg md:text-xl">Analytics</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Understand your business growth.
          </p>
        </div>

      </section>

    </div>
  );
}

export default AdminLanding;