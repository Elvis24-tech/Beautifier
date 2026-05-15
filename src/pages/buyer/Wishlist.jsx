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

    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="min-h-screen bg-amber-200 relative overflow-hidden px-4 md:px-12 py-10">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-300/60 blur-[160px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-400/40 blur-[180px] rounded-full"></div>
      <div className="relative z-10 mb-10 flex items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-black text-amber-200 px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition"
        >
          BACK
        </button>

        <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight text-center flex-1">
          Your Wishlist
        </h1>

        <div className="w-16 md:w-24" />
      </div>
      {wishlist.length === 0 ? (
        <div className="relative z-10 text-center mt-24">
          <div className="text-5xl mb-4">💛</div>
          <h2 className="text-2xl font-black text-black">
            Your wishlist is empty
          </h2>
          <p className="text-black mt-2 font-medium">
            Save your favorite beauty products for later
          </p>

        </div>
      ) : (
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-amber-300 border border-amber-400 rounded-3xl shadow-lg overflow-hidden hover:scale-[1.02] transition"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h2 className="font-black text-black uppercase truncate">
                  {item.name}
                </h2>
                <p className="text-black font-extrabold text-lg mt-2">
                  Ksh {item.price}
                </p>
                <div className="flex gap-2 mt-5">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`flex-1 py-2 rounded-xl font-black text-sm transition ${
                      addedId === item.id
                        ? "bg-black text-amber-200"
                        : "bg-amber-200 text-black hover:bg-amber-100"
                    }`}
                  >
                    {addedId === item.id ? "ADDED ✓" : "ADD TO CART"}
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="px-4 py-2 rounded-xl bg-black text-amber-200 text-sm font-bold hover:scale-105 transition"
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