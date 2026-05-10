import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

function BuyerDashboard() {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100">
      <div className="px-6 md:px-12 pt-10 relative">
        <div className="absolute -top-20 -left-20 w-75 h-75 bg-pink-300/40 blur-[120px] rounded-full"></div>
        <div className="absolute top-12.5 -right-25 h-80 w-80 bg-purple-300/30 blur-[130px] rounded-full"></div>
        <div className="relative z-10 flex justify-between items-center mb-8">

          <h1 className="text-2xl font-black text-gray-800">
            Beauty<span className="text-pink-500">Shop</span>
          </h1>

          <div className="flex gap-3">
            <Link
              to="/buyer/wishlist"
              className="bg-white/70 backdrop-blur-xl border border-white/40 px-4 py-2 rounded-full shadow hover:scale-105 transition"
            >
              ❤️ Wishlist
            </Link>

            {/* Cart */}
            <Link
              to="/buyer/cart"
              className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition"
            >
              🛒 Cart
            </Link>

          </div>

        </div>

        {/* HERO TEXT */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>

            <p className="text-pink-500 tracking-[6px] uppercase text-sm font-semibold">
              Beauty Store
            </p>

            <h1 className="text-5xl md:text-6xl font-black text-gray-800 leading-tight">
              Discover Your
              <br />
              <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Glow Collection
              </span>
            </h1>

            <p className="text-gray-500 mt-4 max-w-xl">
              Premium skincare, makeup, and beauty essentials curated for elegance and confidence.
            </p>

          </div>

          {/* SEARCH */}
          <div className="w-full lg:w-95">

            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-lg flex items-center px-5 py-4">

              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent outline-none text-gray-700"
              />

              <span className="text-gray-400">🔍</span>

            </div>

          </div>

        </div>

        {/* FILTERS */}
        <div className="flex gap-3 mt-10 flex-wrap">

          {["All", "Skincare", "Makeup", "Hair", "Fragrance"].map((item) => (
            <button
              key={item}
              className="px-6 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-white/40 text-gray-700 hover:bg-linear-to-r hover:from-pink-400 hover:to-purple-400 hover:text-white transition"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      {/* PRODUCTS */}
      <div className="px-6 md:px-12 py-12">

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-700">
            Featured Products
          </h2>
          <p className="text-gray-500">
            Hand-picked beauty essentials for you
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-4xl shadow-lg hover:-translate-y-3 transition overflow-hidden"
            >
              <ProductCard />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default BuyerDashboard;