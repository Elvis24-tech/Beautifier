import { Link } from "react-router-dom";

function BuyerLanding() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-purple-100 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute -top-30 -left-30 w-100 h-100 bg-pink-300/40 blur-[140px] rounded-full"></div>

      <div className="absolute -bottom-37.5 -right-30 w-112.5 h-112.5 bg-purple-300/30 blur-[150px] rounded-full"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-6 relative z-10">

        <h1 className="text-3xl md:text-4xl font-black text-gray-800">
          Beautify
        </h1>

        <div className="flex gap-4">

          <Link
            to="/buyer/dashboard"
            className="bg-white/70 backdrop-blur-xl px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
          >
            Shop Now
          </Link>

          <Link
            to="/admin"
            className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
          >
            Admin
          </Link>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 items-center px-6 md:px-16 py-16 relative z-10">

        {/* Left */}
        <div>

          <p className="text-pink-500 tracking-[6px] uppercase text-sm mb-6">
            Luxury Beauty Store
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-gray-800 leading-tight">
            Discover Your
            <br />
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Glow
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Premium skincare, makeup, and beauty essentials curated for elegance and confidence.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              to="/buyer/dashboard"
              className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
            >
              Start Shopping
            </Link>

            <button className="bg-white/60 backdrop-blur-xl px-8 py-4 rounded-full shadow hover:bg-white transition">
              Explore
            </button>

          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">

            <div>
              <h2 className="text-3xl font-black text-gray-800">10K+</h2>
              <p className="text-gray-500">Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-gray-800">200+</h2>
              <p className="text-gray-500">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-gray-800">4.8★</h2>
              <p className="text-gray-500">Rating</p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center mt-12 lg:mt-0">

          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            className="w-full max-w-130 rounded-[40px] shadow-2xl hover:scale-105 transition"
          />

        </div>

      </section>

    </div>
  );
}

export default BuyerLanding;