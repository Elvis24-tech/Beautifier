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
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-stone-100 px-4 md:px-12 py-10">
      <div className="mb-10 flex items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-black text-amber-100 px-4 py-2 rounded-full shadow-lg hover:scale-105 transition text-sm font-bold"
        >
          ← BACK
        </button>

        <h1 className="text-3xl md:text-5xl font-black text-black text-center flex-1 uppercase tracking-tight">
          Your Wishlist
        </h1>

        <div className="w-16 md:w-24" />
      </div>
      {wishlist.length === 0 ? (
        <div className="text-center mt-24">
          <div className="text-5xl mb-4">💛</div>
          <h2 className="text-2xl font-black text-black">
            Your wishlist is empty
          </h2>
          <p className="text-black/60 mt-2">
            Save your favorite beauty products for later
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl shadow-xl overflow-hidden hover:scale-[1.02] transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h2 className="font-black text-black uppercase tracking-wide truncate">
                  {item.name}
                </h2>

                <p className="text-amber-600 font-black text-lg mt-2">
                  Ksh {item.price}
                </p>
                <div className="flex gap-2 mt-5">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`flex-1 py-2 rounded-xl font-extrabold text-sm transition ${
                      addedId === item.id
                        ? "bg-black text-amber-100"
                        : "bg-amber-200 text-black hover:bg-amber-300"
                    }`}
                  >
                    {addedId === item.id ? "ADDED ✓" : "ADD TO CART"}
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="px-4 py-2 rounded-xl bg-black text-amber-100 text-sm font-bold hover:scale-105 transition"
                  >
                    REMOVE
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