import { useState } from "react";
import { useShop } from "../../context/ShopContext";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="min-h-screen bg-amber-200 relative overflow-hidden px-4 sm:px-6 md:px-12 py-6 sm:py-10">
      <div className="absolute -top-32 -left-32 sm:-top-40 sm:-left-40 w-72 h-72 sm:w-96 sm:h-96 bg-amber-300/60 blur-[130px] sm:blur-[160px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 sm:-bottom-40 sm:-right-40 w-72 h-72 sm:w-96 sm:h-96 bg-amber-400/40 blur-[150px] sm:blur-[180px] rounded-full"></div>
      <div className="relative z-10 mb-8 sm:mb-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="w-full sm:w-auto flex justify-start">
          <button
            onClick={() => navigate(-1)}
            className="bg-black text-amber-200 px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition"
          >
            BACK
          </button>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight leading-tight">
            Your Wishlist
          </h1>

          <p className="text-black/70 mt-2 text-sm sm:text-base">
            Save your favorite beauty products
          </p>
        </div>
        <div className="hidden sm:block w-20"></div>
      </div>
      {wishlist.length === 0 ? (
        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-16 sm:mt-24 px-4">
          <div className="w-24 h-24 sm:w-28 sm:h-28 bg-amber-300 rounded-full flex items-center justify-center shadow-2xl text-4xl sm:text-5xl border border-amber-400">
            💛
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-black mt-6">
            Your wishlist is empty
          </h2>

          <p className="text-black/70 mt-2 text-sm sm:text-base max-w-md">
            Save your favorite beauty products for later
          </p>

          <Link
            to="/buyer/dashboard"
            className="mt-6 bg-black text-amber-200 px-8 py-3 rounded-full font-black hover:scale-105 transition"
          >
            START SHOPPING
          </Link>
        </div>
      ) : (
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-amber-300 border border-amber-400 rounded-3xl shadow-lg overflow-hidden hover:scale-[1.02] transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-5">
                <h2 className="font-black text-black uppercase truncate text-sm sm:text-base">
                  {item.name}
                </h2>

                <p className="text-black font-extrabold text-lg sm:text-xl mt-2">
                  Ksh {item.price}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`flex-1 py-2.5 rounded-xl font-black text-sm transition ${
                      addedId === item.id
                        ? "bg-black text-amber-200"
                        : "bg-amber-200 text-black hover:bg-amber-100"
                    }`}
                  >
                    {addedId === item.id ? "ADDED ✓" : "ADD TO CART"}
                  </button>

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="px-4 py-2.5 rounded-xl bg-black text-amber-200 text-sm font-bold hover:scale-105 transition"
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