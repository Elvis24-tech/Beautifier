import { Link } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";

function BuyerDashboard() {
  const { cart, wishlist } = useShop();
  const [products, setProducts] = useState([]);

  const cartCount = cart.reduce((t, item) => t + item.quantity, 0);
  const wishlistCount = wishlist.length;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-stone-100">

      {/* HEADER */}
      <div className="px-5 md:px-12 pt-10">

        <div className="flex justify-between items-center mb-10">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <Link
              to="/"
              className="bg-black text-amber-100 px-4 py-2 rounded-full text-sm shadow-lg hover:scale-105 transition font-bold"
            >
              ← HOME
            </Link>

            <h1 className="text-2xl md:text-3xl font-black text-black tracking-tight uppercase">
              Beauty<span className="text-amber-500">Shop</span>
            </h1>

          </div>

          {/* RIGHT */}
          <div className="flex gap-3">

            {/* WISHLIST */}
            <Link
              to="/buyer/wishlist"
              className="relative bg-white/80 backdrop-blur-xl border border-black/10 px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition font-bold text-black"
            >
              ❤️
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-amber-100 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* CART */}
            <Link
              to="/buyer/cart"
              className="relative bg-black text-amber-100 px-5 py-2 rounded-full text-sm font-extrabold shadow-xl hover:scale-105 transition"
            >
              🛒 CART
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-300 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>
        </div>

        {/* HERO TEXT */}
        <div className="mb-10">

          <h2 className="text-3xl md:text-5xl font-black text-black leading-none uppercase">
            Glow with
            <span className="block text-amber-500 drop-shadow-sm">
              confidence
            </span>
          </h2>

          <p className="text-black/60 mt-3 text-sm md:text-base max-w-xl font-medium">
            Premium skincare & beauty essentials curated for a bold, elegant lifestyle.
          </p>

        </div>

      </div>

      {/* PRODUCTS */}
      <div className="px-5 md:px-12 pb-16">

        {products.length === 0 ? (
          <div className="text-center text-black/50 mt-20 font-medium">
            No products available yet
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  image: product.image.startsWith("http")
                    ? product.image
                    : `http://127.0.0.1:8000${product.image}`,
                }}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default BuyerDashboard;