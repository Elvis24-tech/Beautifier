import { useState } from "react";
import { useShop } from "../context/ShopContext";

function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useShop();

  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">

      {/* PRODUCT IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">

        {/* PRODUCT NAME */}
        <h2 className="font-bold text-lg text-gray-800">
          {product.name}
        </h2>

        {/* PRICE */}
        <p className="text-pink-500 font-black text-xl mt-2">
          Ksh {product.price}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-5">

          {/* WISHLIST */}
          <button
            onClick={() => addToWishlist(product)}
            className="px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-pink-50 transition"
          >
            ❤️
          </button>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            className={`flex-1 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
              added
                ? "bg-green-500 scale-105"
                : "bg-linear-to-r from-pink-400 to-purple-400 hover:scale-105"
            }`}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;