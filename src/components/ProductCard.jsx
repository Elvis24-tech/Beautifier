import { useShop } from "../context/ShopContext";

function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useShop();

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden">

      <img
        src={product.image}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="font-bold text-lg">
          {product.name}
        </h2>

        <p className="text-pink-500 font-bold mt-2">
          Ksh {product.price}
        </p>

        <div className="flex gap-2 mt-4">

          <button
            onClick={() => addToWishlist(product)}
            className="px-3 py-2 bg-white border rounded-xl"
          >
            ❤️
          </button>

          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-linear-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-xl"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;