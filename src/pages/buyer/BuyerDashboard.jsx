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
      .then((data) => setProducts(Array.isArray(data) ? data : data.results || []))
      .catch(console.log);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-200 via-amber-100 to-amber-300 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-300/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-black/5 blur-[180px] rounded-full" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-amber-200/20 blur-[200px] rounded-full" />
      <div className="px-4 sm:px-6 md:px-12 pt-8 md:pt-10 relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="bg-black text-amber-200 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold hover:scale-105 transition"
            >
              ← HOME
            </Link>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-black uppercase">
              Beauty<span className="text-black">Shop</span>
            </h1>

          </div>
          <div className="flex gap-3 sm:gap-4">
            <Link
              to="/buyer/wishlist"
              className="relative bg-amber-100 border border-black/10 px-3 sm:px-4 py-2 rounded-full font-bold text-black hover:scale-105 transition"
            >
              ❤️
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-amber-200 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              to="/buyer/cart"
              className="relative bg-black text-amber-200 px-4 sm:px-5 py-2 rounded-full font-extrabold hover:scale-105 transition"
            >
              🛒 CART
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-200 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>

        </div>
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl font-black text-black uppercase leading-tight">
            Glow with
            <span className="block text-black">
              confidence
            </span>
          </h2>

          <p className="text-black mt-3 text-sm sm:text-base max-w-xl mx-auto sm:mx-0">
            Premium skincare & beauty essentials curated for elegance.
          </p>

        </div>

      </div>
      <div className="px-4 sm:px-6 md:px-12 pb-16 relative z-10">

        {products.length === 0 ? (
          <div className="text-center text-black mt-20">
            No products available yet
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  image: product.image?.startsWith("http")
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