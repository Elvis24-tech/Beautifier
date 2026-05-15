function AdminLanding() {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-200 via-amber-100 to-amber-300 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-400/20 blur-[140px] rounded-full"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-amber-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-amber-300/20 blur-[150px] rounded-full"></div>
      <nav className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-6 md:px-16 py-6">

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight uppercase text-center sm:text-left">
          Beautifier <span className="text-black">Seller</span>
        </h1>
        <div className="flex justify-center">
          <span className="text-black font-bold text-xs sm:text-sm uppercase tracking-widest text-center">
            Seller Control Panel
          </span>
        </div>

      </nav>
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 md:px-16 py-10 md:py-20">
        <div className="text-center lg:text-left">
          <p className="text-black font-bold tracking-[5px] uppercase text-xs sm:text-sm">
            SELLER CONTROL CENTER
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black leading-none mt-4 uppercase">
            Build Your
            <br />
            <span className="text-black">
              Beauty Empire
            </span>
          </h1>

          <p className="text-black mt-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Manage products, process orders, monitor growth, and scale your luxury beauty business from one powerful dashboard.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            <button
              onClick={() => window.location.href = "/admin/dashboard"}
              className="bg-black text-amber-200 px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:scale-105 transition font-extrabold tracking-wide"
            >
              ENTER DASHBOARD
            </button>
          </div>

        </div>
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt="Seller Dashboard"
            className="rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover border border-amber-300"
          />
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-16 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-amber-100/80 border border-amber-300 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition">
          <h2 className="font-black text-black text-lg uppercase">
            Product Management
          </h2>
          <p className="text-black mt-2 text-sm leading-relaxed">
            Upload and organize beauty products with elegant control and speed.
          </p>
        </div>

        <div className="bg-amber-100/80 border border-amber-300 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition">
          <h2 className="font-black text-black text-lg uppercase">
            Order Tracking
          </h2>
          <p className="text-black mt-2 text-sm leading-relaxed">
            Stay updated with customer purchases and order fulfillment in real-time.
          </p>
        </div>

        <div className="bg-amber-100/80 border border-amber-300 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition">
          <h2 className="font-black text-black text-lg uppercase">
            Business Insights
          </h2>
          <p className="text-black mt-2 text-sm leading-relaxed">
            Analyze revenue, performance, and growth using a modern analytics experience.
          </p>
        </div>

      </section>

    </div>
  );
}

export default AdminLanding;