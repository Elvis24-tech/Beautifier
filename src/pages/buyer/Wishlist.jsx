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
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100 px-4 md:px-12 py-10">

      {/* HEADER */}
      <div className="mb-10 flex items-center justify-between gap-4">

        <button
          onClick={() => navigate(-1)}
          className="bg-white/70 backdrop-blur-xl border border-white/40 px-4 py-2 rounded-full shadow hover:scale-105 transition text-sm font-medium"
        >
          ← Back
        </button>

        <h1 className="text-3xl md:text-5xl font-black text-gray-800 text-center flex-1">
          Your Wishlist
        </h1>

        <div className="w-16 md:w-24" />
      </div>

      {/* EMPTY STATE */}
      {wishlist.length === 0 ? (
        <div className="text-center mt-20 text-gray-500 text-lg">
          Your wishlist is empty 💖
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >

              {/* IMAGE (SMALLER HEIGHT) */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 object-cover"
              />

              {/* CONTENT (COMPACT) */}
              <div className="p-4">

                <h2 className="font-semibold text-lg text-gray-800 truncate">
                  {item.name}
                </h2>

                <p className="text-pink-500 font-bold text-sm mt-1">
                  Ksh {item.price}
                </p>

                {/* ACTIONS */}
                <div className="flex gap-2 mt-4">

                  {/* ADD TO CART */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`flex-1 py-2 rounded-xl text-white text-sm font-semibold transition ${
                      addedId === item.id
                        ? "bg-green-500"
                        : "bg-pink-500 hover:scale-105"
                    }`}
                  >
                    {addedId === item.id ? "Added ✓" : "Add"}
                  </button>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="px-3 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-sm transition"
                  >
                    Remove
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Wishlist;