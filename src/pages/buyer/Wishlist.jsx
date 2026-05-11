import { useState } from "react";
import { useShop } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useShop();
  const navigate = useNavigate();

  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedId(item.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100 px-6 md:px-12 py-12">

      {/* HEADER */}
      <div className="mb-10 flex items-center justify-between">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="bg-white/70 backdrop-blur-xl border border-gray-200 px-5 py-2 rounded-full shadow hover:scale-105 transition font-medium"
        >
          ← Back
        </button>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 text-center">
          Your Wishlist
        </h1>

        {/* RIGHT SPACER (keeps title centered) */}
        <div className="w-24" />

      </div>

      {/* EMPTY STATE */}
      {wishlist.length === 0 ? (
        <div className="text-center mt-20 text-gray-500 text-lg">
          Your wishlist is empty 💖
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl transition"
            >

              <h2 className="font-bold text-xl text-gray-800">
                {item.name}
              </h2>

              <p className="text-pink-500 font-bold mt-2">
                Ksh {item.price}
              </p>

              <div className="flex gap-3 mt-5">

                {/* ADD TO CART */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className={`px-4 py-2 rounded-xl text-white font-semibold transition ${
                    addedId === item.id
                      ? "bg-green-500"
                      : "bg-pink-500 hover:scale-105"
                  }`}
                >
                  {addedId === item.id ? "Added ✓" : "Add to Cart"}
                </button>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
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