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
      <div className="px-4 sm:px-6 md:px-12 pt-8 md:pt-10 relative z-10">
        <div className="flex justify-between items-center mb-10">
          <Link
            to="/"
            className="bg-black text-amber-200 px-4 py-2 rounded-full font-bold hover:scale-105 transition"
          >
            ← HOME
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-wide">
            BeautyShop
          </h1>
          <div className="flex gap-3 items-center">
            <Link
              to="/buyer/wishlist"
              className="flex items-center gap-2 bg-pink-200 text-black px-5 py-2 rounded-full font-bold shadow-md hover:scale-105 transition"
            >
              Wishlist
              <span className="bg-black text-pink-200 px-2 py-0.5 rounded-full text-xs font-black">
                {wishlistCount}
              </span>
            </Link>
            <Link
              to="/buyer/cart"
              className="flex items-center gap-2 bg-black text-amber-200 px-5 py-2 rounded-full font-bold shadow-md hover:scale-105 transition"
            >
              🛒 Cart
              <span className="bg-amber-200 text-black px-2 py-0.5 rounded-full text-xs font-black">
                {cartCount}
              </span>
            </Link>

          </div>
        </div>

        <h2 className="text-4xl font-black">Products</h2>
      </div>
      <div className="px-4 md:px-12 pb-16 relative z-10">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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