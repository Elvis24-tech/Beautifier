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
    }, 1500);
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover hover:scale-110 transition duration-500"
        />

        {/* subtle dark overlay for luxury feel */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition"></div>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* NAME */}
        <h2 className="font-black text-lg text-black uppercase tracking-wide">
          {product.name}
        </h2>

        {/* PRICE */}
        <p className="text-amber-600 font-black text-xl mt-2 tracking-wide">
          Ksh {product.price}
        </p>

        {/* ACTIONS */}
        <div className="flex gap-3 mt-5">

          {/* WISHLIST */}
          <button
            onClick={() => addToWishlist(product)}
            className="px-4 py-2 bg-amber-100 border border-black/10 rounded-xl hover:bg-amber-200 transition font-bold text-black"
          >
            ❤️
          </button>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            className={`flex-1 px-4 py-2 rounded-xl font-extrabold tracking-wide transition-all duration-300 ${
              added
                ? "bg-black text-amber-100 scale-105"
                : "bg-black text-amber-100 hover:scale-105"
            }`}
          >
            {added ? "ADDED ✓" : "ADD TO CART"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;