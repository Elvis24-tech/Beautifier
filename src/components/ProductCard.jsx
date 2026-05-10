import { useShop } from "../context/ShopContext";

function ProductCard() {
  const shop = useShop();

  // 🔥 DEBUG: if this is undefined, context is broken
  if (!shop) {
    console.error("ShopContext not found. Did you wrap App with ShopProvider?");
    return null;
  }

  const { addToCart, addToWishlist } = shop;

  const product = {
    id: 1,
    name: "Luxury Face Cream",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  };

  const handleCart = () => {
    console.log("ADD TO CART CLICKED");
    addToCart(product);
  };

  const handleWishlist = () => {
    console.log("ADD TO WISHLIST CLICKED");
    addToWishlist(product);
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt="Product"
          className="h-56 md:h-64 w-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">

        <h2 className="text-lg md:text-xl font-black text-gray-800">
          {product.name}
        </h2>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Premium skincare for glowing skin.
        </p>

        <div className="flex justify-between items-center mt-5">

          <span className="text-pink-500 font-black text-lg md:text-xl">
            Ksh {product.price}
          </span>

          <div className="flex gap-2">

            <button
              onClick={handleWishlist}
              className="bg-white border border-pink-200 text-pink-500 px-3 py-2 rounded-xl hover:bg-pink-50 transition"
            >
              ❤️
            </button>

            <button
              onClick={handleCart}
              className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
            >
              Add
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;