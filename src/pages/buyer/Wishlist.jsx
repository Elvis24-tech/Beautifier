import { useShop } from "../../context/ShopContext";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100 px-6 md:px-12 py-12">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-gray-800">
          Your Wishlist
        </h1>

        <p className="text-gray-500 mt-2">
          Saved beauty products you love
        </p>
      </div>

      {/* EMPTY */}
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-20">

          <div className="w-32 h-32 bg-white/60 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg">
            💖
          </div>

          <h2 className="text-2xl font-bold text-gray-700 mt-6">
            Your wishlist is empty
          </h2>

          <Link
            to="/buyer/dashboard"
            className="mt-8 bg-linear-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full shadow-lg"
          >
            Explore Products
          </Link>

        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-lg"
            >

              <h2 className="font-bold text-xl">{item.name}</h2>

              <p className="text-pink-500 font-bold mt-2">
                Ksh {item.price}
              </p>

              <div className="flex gap-3 mt-4">

                <button
                  onClick={() => addToCart(item)}
                  className="bg-pink-500 text-white px-4 py-2 rounded-xl"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-gray-200 px-4 py-2 rounded-xl"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Wishlist;