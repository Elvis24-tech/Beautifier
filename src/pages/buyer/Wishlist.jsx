import { useState } from "react";
import { useShop } from "../../context/ShopContext";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

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

      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-gray-800">
          Your Wishlist
        </h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center mt-20 text-gray-500">
          Your wishlist is empty
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg"
            >

              <h2 className="font-bold text-xl">
                {item.name}
              </h2>

              <p className="text-pink-500 font-bold mt-2">
                Ksh {item.price}
              </p>

              <div className="flex gap-3 mt-4">

                <button
                  onClick={() => handleAddToCart(item)}
                  className={`px-4 py-2 rounded-xl text-white transition ${
                    addedId === item.id
                      ? "bg-green-500"
                      : "bg-pink-500"
                  }`}
                >
                  {addedId === item.id ? "Added ✓" : "Add to Cart"}
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