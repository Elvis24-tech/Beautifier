import { Link } from "react-router-dom";

function BuyerLanding() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-purple-100 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-30 -right-25 w-96 h-96 bg-purple-300/30 blur-[140px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-5 md:px-16 py-6 relative z-10">

        <h1 className="text-2xl md:text-4xl font-black text-gray-800">
          Beautifier
        </h1>

        <div className="flex gap-3 md:gap-4">

          <Link
            to="/buyer/dashboard"
            className="bg-white/70 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-full shadow hover:scale-105 transition"
          >
            Shop
          </Link>

          <Link
            to="/admin"
            className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow hover:scale-105 transition"
          >
            Admin
          </Link>

        </div>

      </nav>

      {/* HERO */}
      <section className="grid lg:grid-cols-2 gap-10 items-center px-5 md:px-16 py-10 md:py-16 relative z-10">

        <div>

          <p className="text-pink-500 tracking-[4px] uppercase text-xs md:text-sm font-semibold">
            Luxury Beauty Store
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-gray-800 leading-tight mt-3">
            Glow like
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {" "}never before
            </span>
          </h1>

          <p className="text-gray-600 mt-5 text-sm md:text-lg max-w-xl">
            Discover skincare, makeup, and fragrance products designed to enhance your natural beauty.
          </p>

          {/* ONLY ONE CTA NOW */}
          <div className="mt-8">

            <Link
              to="/buyer/dashboard"
              className="inline-block bg-linear-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              Start Shopping
            </Link>

          </div>

        </div>

        {/* PRODUCT PREVIEW */}
        <div className="grid grid-cols-2 gap-4">

          {[
            {
              img: "https://images.unsplash.com/photo-1612810436541-336d36d6a2f4",
              name: "Face Cream"
            },
            {
              img: "https://images.unsplash.com/photo-1616683693504-3ea7e9adf3e3",
              name: "Lip Gloss"
            },
            {
              img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
              name: "Perfume"
            },
            {
              img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de",
              name: "Serum"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={item.img}
                className="h-40 w-full object-cover"
                alt={item.name}
              />
              <p className="text-center py-3 text-gray-700 font-semibold text-sm">
                {item.name}
              </p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default BuyerLanding;