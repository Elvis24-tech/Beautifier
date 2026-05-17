import { Link } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";

const BASE_URL = "https://beautifier-backend-iqvq.onrender.com";

function BuyerDashboard() {
  const { cart, wishlist } = useShop();
  const [products, setProducts] = useState([]);

  const cartCount = cart.reduce((t, item) => t + item.quantity, 0);
  const wishlistCount = wishlist.length;

  useEffect(() => {
    fetch(`${BASE_URL}/api/products/`)
      .then((res) => res.json())
      .then((data) =>
        setProducts(Array.isArray(data) ? data : data.results || [])
      )
      .catch(console.log);
  }, []);

  return (
    <div className="min-h-screen bg-amber-200 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-amber-300/50 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-amber-400/40 blur-[140px] rounded-full"></div>
      <div className="px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 md:pt-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center mb-8 sm:mb-10">
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <Link
              to="/"
              className="bg-black text-amber-200 px-5 py-2.5 rounded-full font-bold hover:scale-105 transition text-sm sm:text-base"
            >
              ← HOME
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide text-center">
            Beautifier
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 items-center w-full lg:w-auto">
            <Link
              to="/buyer/wishlist"
              className="flex justify-center items-center gap-2 bg-pink-200 text-black px-5 py-2.5 rounded-full font-bold shadow-md hover:scale-105 transition w-full sm:w-auto"
            >
              Wishlist
              <span className="bg-black text-pink-200 px-2 py-0.5 rounded-full text-xs font-black">
                {wishlistCount}
              </span>
            </Link>

            <Link
              to="/buyer/cart"
              className="flex justify-center items-center gap-2 bg-black text-amber-200 px-5 py-2.5 rounded-full font-bold shadow-md hover:scale-105 transition w-full sm:w-auto"
            >
              🛒 Cart
              <span className="bg-amber-200 text-black px-2 py-0.5 rounded-full text-xs font-black">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center sm:text-left">
            Products
          </h2>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-12 pb-16 relative z-10">
        {products.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-lg sm:text-xl font-semibold text-black">
              No products available
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  image: product.image?.startsWith("http")
                    ? product.image
                    : `${BASE_URL}${product.image}`,
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