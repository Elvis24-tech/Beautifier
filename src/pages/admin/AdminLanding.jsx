import { Link } from "react-router-dom";

function AdminLanding() {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-amber-100 to-stone-100 relative overflow-hidden">

      {/* LUXURY GLOWS */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-amber-300/20 blur-[150px] rounded-full"></div>
      <div className="absolute top-40 -right-40 w-125 h-125 bg-black/10 blur-[170px] rounded-full"></div>
      <div className="absolute -bottom-40 left-1/3 w-125 h-125 bg-amber-200/20 blur-[160px] rounded-full"></div>

      {/* NAV */}
      <nav className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-6 md:px-16 py-6">

        <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight uppercase text-center sm:text-left">
          Beautifier
          <span className="text-amber-600"> Seller</span>
        </h1>

        <div className="flex gap-3 justify-center">

          <Link
            to="/login"
            className="bg-black text-amber-100 px-6 py-3 rounded-full shadow-xl hover:scale-105 transition font-bold tracking-wide"
          >
            LOGIN
          </Link>

          <Link
            to="/register"
            className="bg-amber-200 text-black px-6 py-3 rounded-full shadow-xl hover:scale-105 transition font-extrabold border border-black/20"
          >
            REGISTER
          </Link>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-16 py-10 md:py-20">

        {/* TEXT */}
        <div className="text-center lg:text-left">

          <p className="text-black/70 font-bold tracking-[6px] uppercase text-xs md:text-sm">
            SELLER CONTROL CENTER
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-black leading-none mt-4 uppercase">
            Build Your
            <br />
            <span className="text-black drop-shadow-[3px_3px_0px_rgba(0,0,0,0.15)]">
              Beauty Empire
            </span>
          </h1>

          <p className="text-black/70 mt-6 text-sm md:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Manage products, process orders, monitor growth, and scale your luxury beauty business from one powerful dashboard.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">

            <Link
              to="/login"
              className="inline-block bg-black text-amber-100 px-10 py-4 rounded-full shadow-2xl hover:scale-105 transition font-extrabold tracking-wide"
            >
              SELLER LOGIN
            </Link>

            <Link
              to="/register"
              className="inline-block bg-white/80 backdrop-blur-xl text-black border border-black/10 px-10 py-4 rounded-full shadow-2xl hover:scale-105 transition font-extrabold tracking-wide"
            >
              CREATE ACCOUNT
            </Link>

          </div>

        </div>

        {/* IMAGE */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt="Seller Dashboard"
            className="rounded-3xl shadow-2xl w-full max-w-sm md:max-w-md object-cover border border-black/10"
          />

        </div>

      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-6 md:px-16 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition">
          <h2 className="font-black text-lg text-black uppercase">
            Product Management
          </h2>

          <p className="text-black/60 mt-2 text-sm leading-relaxed">
            Upload and organize beauty products with elegant control and speed.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition">
          <h2 className="font-black text-lg text-black uppercase">
            Order Tracking
          </h2>

          <p className="text-black/60 mt-2 text-sm leading-relaxed">
            Stay updated with customer purchases and order fulfillment in real-time.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition">
          <h2 className="font-black text-lg text-black uppercase">
            Business Insights
          </h2>

          <p className="text-black/60 mt-2 text-sm leading-relaxed">
            Analyze revenue, performance, and growth using a modern analytics experience.
          </p>
        </div>

      </section>

    </div>
  );
}

export default AdminLanding;