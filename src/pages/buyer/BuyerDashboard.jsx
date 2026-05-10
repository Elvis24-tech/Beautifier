import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

function BuyerDashboard() {

  const products = [
    {
      id: 1,
      name: "Vitamin C Glow Serum",
      price: 1200,
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd"
    },
    {
      id: 2,
      name: "Shea Butter Body Lotion",
      price: 900,
      image: "https://images.unsplash.com/photo-1612810436541-336d36d6a2f4"
    },
    {
      id: 3,
      name: "Rose Face Toner",
      price: 750,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
    },
    {
      id: 4,
      name: "Luxury Lip Gloss",
      price: 650,
      image: "https://images.unsplash.com/photo-1616683693504-3ea7e9adf3e3"
    },
    {
      id: 5,
      name: "Hair Growth Oil",
      price: 1100,
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de"
    },
    {
      id: 6,
      name: "Perfume Essence",
      price: 2500,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100">

      {/* HEADER */}
      <div className="px-5 md:px-12 pt-10">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl md:text-3xl font-black text-gray-800">
            Beauty<span className="text-pink-500">Shop</span>
          </h1>

          <div className="flex gap-2 md:gap-3">

            <Link
              to="/buyer/wishlist"
              className="bg-white/70 backdrop-blur-xl px-3 md:px-4 py-2 rounded-full text-sm shadow"
            >
              ❤️
            </Link>

            <Link
              to="/buyer/cart"
              className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-3 md:px-4 py-2 rounded-full text-sm shadow"
            >
              🛒
            </Link>

          </div>

        </div>

        {/* HERO TEXT */}
        <div className="mb-8">

          <h2 className="text-3xl md:text-5xl font-black text-gray-800 leading-tight">
            Glow with confidence
          </h2>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Premium skincare & beauty essentials made for you
          </p>

        </div>

      </div>

      {/* PRODUCTS GRID */}
      <div className="px-5 md:px-12 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>

    </div>
  );
}

export default BuyerDashboard;