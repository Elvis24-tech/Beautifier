import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-[#fff8fb]">

      {/* Premium Background Layers */}
      <div className="absolute inset-0 bg-linear-to-br from-rose-100 via-pink-50 to-purple-100"></div>

      <div className="absolute -top-30 -left-25 w-105 h-105 bg-pink-300/40 blur-[140px] rounded-full"></div>

      <div className="absolute top-[20%] -right-30 w-100 h-100 bg-purple-300/30 blur-[140px] rounded-full"></div>

      <div className="absolute -bottom-37.5 left-[20%] w-112.5 h-112.5 bg-rose-200/40 blur-[150px] rounded-full"></div>

      <div className="absolute inset-0 backdrop-blur-[80px]"></div>

      {/* Main Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 md:px-16 py-6">

          <h1 className="text-3xl md:text-4xl font-black tracking-wide text-gray-800">
            Beautify
          </h1>

          <div className="flex items-center gap-4">

            <Link
              to="/buyer"
              className="
                bg-white/70
                backdrop-blur-xl
                border border-white/40
                text-gray-800
                px-6 py-3
                rounded-full
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Shop
            </Link>

            <Link
              to="/admin"
              className="
                bg-linear-to-r
                from-pink-400
                via-rose-400
                to-purple-400
                text-white
                px-6 py-3
                rounded-full
                shadow-xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Admin
            </Link>

          </div>

        </nav>

        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 items-center px-6 md:px-16 py-16 lg:min-h-[90vh]">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[6px] text-pink-500 text-sm font-semibold mb-6">
              Premium Beauty Collection
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-800">

              Glow With
              <br />

              <span className="bg-linear-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
                Confidence
              </span>

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
              Discover luxury skincare, makeup, and beauty essentials
              crafted to enhance elegance, confidence, and self-expression.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button
                className="
                  bg-linear-to-r
                  from-pink-400
                  via-rose-400
                  to-purple-400
                  text-white
                  px-10 py-5
                  rounded-full
                  text-lg
                  font-semibold
                  shadow-[0_10px_40px_rgba(236,72,153,0.35)]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Shop Now
              </button>

              <button
                className="
                  bg-white/60
                  backdrop-blur-xl
                  border border-white/40
                  text-gray-700
                  px-10 py-5
                  rounded-full
                  text-lg
                  shadow-lg
                  hover:bg-white
                  transition-all
                  duration-300
                "
              >
                Explore
              </button>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-16">

              <div>
                <h2 className="text-4xl font-black text-gray-800">
                  15K+
                </h2>

                <p className="text-gray-500 mt-2">
                  Happy Customers
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-gray-800">
                  250+
                </h2>

                <p className="text-gray-500 mt-2">
                  Beauty Products
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-gray-800">
                  4.9★
                </h2>

                <p className="text-gray-500 mt-2">
                  Customer Reviews
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="relative flex justify-center mt-20 lg:mt-0">

            {/* Floating Top Card */}
            <div className="absolute top-10 -left-5 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[30px] p-5 shadow-2xl z-20 hidden md:block">

              <p className="text-gray-500 text-sm">
                New Collection
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-2">
                Soft Glow Kit
              </h2>

              <p className="text-pink-500 font-semibold mt-2">
                Ksh 3,500
              </p>

            </div>

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
              alt="Beauty"
              className="
                relative
                z-10
                w-full
                max-w-130
                rounded-[40px]
                object-cover
                shadow-[0_20px_80px_rgba(236,72,153,0.25)]
                hover:scale-105
                transition-all
                duration-500
              "
            />

            {/* Floating Bottom Card */}
            <div className="absolute bottom-5 right-0 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[30px] p-5 shadow-2xl z-20 hidden md:block">

              <p className="text-gray-500 text-sm">
                Best Seller
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-2">
                Glow Serum
              </h2>

              <p className="text-pink-500 font-semibold mt-2">
                Ksh 2,500
              </p>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Home;