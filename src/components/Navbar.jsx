import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Navbar() {
  const { cart, wishlist } = useShop();

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-lg px-6 md:px-10 py-4">

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/buyer"
          className="text-2xl md:text-3xl font-black bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent tracking-tight"
        >
          BeautyShop
        </Link>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="relative bg-white/80 backdrop-blur-xl border border-gray-200 px-4 py-2.5 rounded-full shadow-sm hover:scale-105 transition"
          >
            ❤️

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="relative bg-black text-white px-4 py-2.5 rounded-full shadow-md hover:scale-105 hover:bg-gray-900 transition"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow">
                {cartCount}
              </span>
            )}
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;