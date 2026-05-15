import { useState } from "react";
import { useShop } from "../context/ShopContext";

function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useShop();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-amber-100 border border-amber-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 sm:h-52 md:h-56 w-full object-cover hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h2 className="font-black text-black text-base sm:text-lg uppercase">
          {product.name}
        </h2>
        <p className="text-black font-black text-lg sm:text-xl mt-2">
          Ksh {product.price}
        </p>
        <div className="flex gap-2 sm:gap-3 mt-4">
          <button
            onClick={() => addToWishlist(product)}
            className="px-3 sm:px-4 py-2 bg-amber-200 border border-amber-300 rounded-xl font-bold text-black hover:bg-amber-300 transition"
          >
            ❤️
          </button>
          <button
            onClick={handleAddToCart}
            className={`flex-1 px-3 sm:px-4 py-2 rounded-xl font-black transition ${
              added
                ? "bg-black text-amber-200"
                : "bg-black text-amber-200 hover:scale-105"
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