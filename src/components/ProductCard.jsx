function ProductCard() {
    return (
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">
  
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
            alt="Product"
            className="h-56 md:h-64 w-full object-cover hover:scale-110 transition duration-500"
          />
        </div>
  
        {/* Content */}
        <div className="p-5 md:p-6">
  
          {/* Title */}
          <h2 className="text-lg md:text-xl font-black text-gray-800">
            Luxury Face Cream
          </h2>
  
          {/* Description */}
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Premium skincare for glowing skin.
          </p>
  
          {/* Bottom Row */}
          <div className="flex justify-between items-center mt-5">
  
            {/* Price */}
            <span className="text-pink-500 font-black text-lg md:text-xl">
              Ksh 1500
            </span>
  
            {/* Button */}
            <button className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition text-sm md:text-base">
              Add to Cart
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default ProductCard;