import { Link } from "react-router-dom";

function AdminLanding() {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-stone-100 relative overflow-hidden">

      {/* SOFT BLACK GLOWS */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-black/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-40 -right-24 w-96 h-96 bg-black/10 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-black/10 blur-[160px] rounded-full"></div>

      {/* NAV */}
      <nav className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-6 md:px-10 py-6">

        <h1 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight text-center sm:text-left">
          Beautifier <span className="text-amber-600">Admin</span>
        </h1>

        <Link
          to="/admin/dashboard"
          className="w-full sm:w-auto text-center bg-black text-amber-100 px-6 py-3 rounded-full shadow-xl hover:scale-105 transition font-bold"
        >
          Enter Dashboard
        </Link>

      </nav>

      {/* HERO */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-10 py-10 md:py-16 items-center">

        {/* TEXT */}
        <div className="text-center lg:text-left">

          <p className="text-black/60 tracking-[5px] uppercase text-xs font-bold">
            Control Center
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-black leading-tight mt-3 uppercase">
            Run Your
            <br />
            <span className="text-amber-600">
              Beauty Empire
            </span>
          </h1>

          <p className="text-black/60 mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg">
            Manage products, track orders, and analyze sales from a unified luxury admin system built for modern ecommerce brands.
          </p>

          <div className="mt-8">
            <Link
              to="/admin/dashboard"
              className="inline-block bg-black text-amber-100 px-8 py-4 rounded-full shadow-xl hover:scale-105 transition font-bold"
            >
              OPEN DASHBOARD
            </Link>
          </div>

        </div>

        {/* IMAGE */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt="Admin Dashboard"
            className="rounded-3xl shadow-2xl w-full max-w-sm md:max-w-md object-cover border border-black/10"
          />

        </div>

      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-6 md:px-10 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

        <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition">
          <h2 className="font-black text-lg text-black uppercase">
            Product Control
          </h2>
          <p className="text-black/60 mt-2 text-sm">
            Manage your entire catalog with precision and speed.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition">
          <h2 className="font-black text-lg text-black uppercase">
            Order System
          </h2>
          <p className="text-black/60 mt-2 text-sm">
            Track every customer order in real-time with clarity.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition">
          <h2 className="font-black text-lg text-black uppercase">
            Analytics
          </h2>
          <p className="text-black/60 mt-2 text-sm">
            Understand your revenue, growth, and performance instantly.
          </p>
        </div>

      </section>

    </div>
  );
}

export default AdminLanding;