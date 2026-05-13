import { Link, useNavigate } from "react-router-dom";

function BuyerLanding() {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("access");

  const handleStartShopping = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    navigate("/buyer/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/buyer");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-amber-100 to-stone-100 relative overflow-hidden">

      {/* Luxury ambient glow */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-amber-300/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-black/10 blur-[170px] rounded-full"></div>

      {/* NAV */}
      <nav className="flex justify-between items-center px-5 md:px-16 py-6 relative z-10">

        <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight uppercase">
          Beautifier
        </h1>

        <div className="flex gap-3 md:gap-4 flex-wrap justify-end">

          {isLoggedIn ? (
            <>
              <button
                onClick={handleStartShopping}
                className="bg-black text-amber-100 px-5 md:px-7 py-2 md:py-3 rounded-full shadow-xl hover:scale-105 transition font-extrabold tracking-wide"
              >
                SHOP NOW
              </button>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 md:px-7 py-2 md:py-3 rounded-full shadow-xl hover:scale-105 transition font-bold"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white/80 backdrop-blur-xl text-black px-5 md:px-7 py-2 md:py-3 rounded-full shadow-xl hover:scale-105 transition font-bold border border-black/10"
              >
                LOGIN
              </Link>

              <Link
                to="/register"
                className="bg-black text-amber-100 px-5 md:px-7 py-2 md:py-3 rounded-full shadow-xl hover:scale-105 transition font-extrabold tracking-wide"
              >
                REGISTER
              </Link>
            </>
          )}

          <Link
            to="/seller"
            className="bg-amber-200 text-black px-5 md:px-7 py-2 md:py-3 rounded-full shadow-xl hover:scale-105 transition font-extrabold border border-black/30"
          >
            SELLER
          </Link>

        </div>
      </nav>

      {/* HERO */}
      <section className="grid lg:grid-cols-2 gap-12 items-center px-5 md:px-16 py-14 md:py-20 relative z-10">

        {/* LEFT TEXT */}
        <div>

          <p className="text-black/70 font-bold tracking-[6px] uppercase text-xs md:text-sm">
            PREMIUM BEAUTY HOUSE
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-black leading-none mt-4 uppercase">
            Glow
            <br />
            LIKE
            <span className="block text-black drop-shadow-[3px_3px_0px_rgba(0,0,0,0.15)]">
              GOLD
            </span>
          </h1>

          <p className="text-black/70 mt-6 text-sm md:text-lg max-w-xl font-medium leading-relaxed">
            Luxury skincare, makeup, and fragrance curated for bold beauty expression.
            This is not just beauty — it’s refined elegance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              onClick={handleStartShopping}
              className="inline-block bg-black text-amber-100 px-10 py-4 rounded-full shadow-2xl hover:scale-105 transition font-extrabold tracking-wide"
            >
              START SHOPPING
            </button>

            {!isLoggedIn && (
              <Link
                to="/register"
                className="inline-block bg-white/80 backdrop-blur-xl text-black px-10 py-4 rounded-full shadow-xl hover:scale-105 transition font-bold border border-black/10"
              >
                CREATE ACCOUNT
              </Link>
            )}

          </div>

        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 gap-5">

          {[
            {
              img: "https://images-cdn.ubuy.co.in/66627d4c7792361739098c99-turmeric-face-cream-vitamin-c-glow.jpg",
              name: "FACE CREAM"
            },
            {
              img: "https://www.byrdie.com/thmb/oTPhNjadECyfMujiDnYakyDXe5o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/byr-best-lip-glosses-tout-7e6142d81c274fb69cb55d4b398201a0.jpg",
              name: "LIP GLOSS"
            },
            {
              img: "https://res.cloudinary.com/dioovnmjd/image/upload/v1719560079/products/top-10-best-perfumes-for-men-kenya.webp",
              name: "PERFUME"
            },
            {
              img: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/pby/pby00764/y/5.jpg",
              name: "SERUM"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-xl text-black rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition border border-black/10"
            >
              <img
                src={item.img}
                className="h-44 w-full object-cover"
                alt={item.name}
              />

              <p className="text-center py-4 font-black tracking-widest text-sm uppercase">
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