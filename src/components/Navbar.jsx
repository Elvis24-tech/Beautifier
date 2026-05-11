import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Navbar() {
  const { cart, wishlist } = useShop();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4">

      <div className="flex items-center justify-between">

        <Link
          to="/buyer"
          className="text-3xl font-black text-pink-500"
        >
          BeautyShop
        </Link>

        <div className="flex items-center gap-4">

          <Link
            to="/wishlist"
            className="relative bg-white border px-5 py-3 rounded-full"
          >
            ❤️

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative bg-black text-white px-5 py-3 rounded-full"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
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