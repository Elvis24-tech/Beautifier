import { Link } from "react-router-dom";

function BuyerLanding() {
  return (
    <div className="min-h-screen bg-amber-200 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 sm:-top-40 sm:-left-40 w-72 h-72 sm:w-96 sm:h-96 bg-amber-300/60 blur-[120px] sm:blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 sm:-bottom-40 sm:-right-40 w-72 h-72 sm:w-96 sm:h-96 bg-amber-400/40 blur-[140px] sm:blur-[180px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-amber-500/30 blur-[150px] sm:blur-[200px] rounded-full"></div>
      <nav className="flex flex-col sm:flex-row justify-between items-center gap-5 px-4 sm:px-6 md:px-16 py-6 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase text-center sm:text-left">
          Beautifier
        </h1>

        <div className="flex flex-col xs:flex-row sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            to="/buyer/dashboard"
            className="bg-black text-amber-200 px-6 py-3 rounded-full font-bold hover:scale-105 transition text-center w-full sm:w-auto"
          >
            SHOP NOW
          </Link>

          <Link
            to="/admin"
            className="bg-amber-300 text-black px-6 py-3 rounded-full font-black border border-amber-400 hover:scale-105 transition text-center w-full sm:w-auto"
          >
            ADMIN
          </Link>
        </div>
      </nav>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 md:px-16 py-10 sm:py-14 md:py-24 relative z-10">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <p className="text-black font-bold tracking-[4px] sm:tracking-[6px] uppercase text-xs sm:text-sm">
            Premium Beauty House
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight mt-4 uppercase">
            Glow
            <br />
            Like Gold
          </h1>

          <p className="text-black mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Luxury skincare, makeup, and fragrance curated for bold beauty
            expression.
          </p>

          <div className="mt-8 sm:mt-10 flex justify-center lg:justify-start">
            <Link
              to="/buyer/dashboard"
              className="bg-black text-amber-200 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-extrabold hover:scale-105 transition text-sm sm:text-base"
            >
              START SHOPPING
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 order-1 lg:order-2">
          {[
            {
              img: "https://images-cdn.ubuy.co.in/66627d4c7792361739098c99-turmeric-face-cream-vitamin-c-glow.jpg",
              name: "Face Cream",
            },
            {
              img: "https://www.byrdie.com/thmb/oTPhNjadECyfMujiDnYakyDXe5o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/byr-best-lip-glosses-tout-7e6142d81c274fb69cb55d4b398201a0.jpg",
              name: "Lip Gloss",
            },
            {
              img: "https://res.cloudinary.com/dioovnmjd/image/upload/v1719560079/products/top-10-best-perfumes-for-men-kenya.webp",
              name: "Perfume",
            },
            {
              img: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/pby/pby00764/y/5.jpg",
              name: "Serum",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-amber-300 border border-amber-400 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-32 sm:h-40 md:h-44 w-full object-cover"
              />

              <p className="text-center py-3 font-black text-black uppercase text-[10px] sm:text-xs md:text-sm">
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