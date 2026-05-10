function ProductCard() {
    return (
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 duration-300">
  
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
          className="h-64 w-full object-cover"
        />
  
        <div className="p-5">
  
          <h2 className="text-xl font-bold">
            Luxury Face Cream
          </h2>
  
          <p className="text-gray-500 mt-2">
            Premium skincare for glowing skin.
          </p>
  
          <div className="flex justify-between items-center mt-5">
  
            <span className="text-pink-500 font-bold text-xl">
              Ksh 1500
            </span>
  
            <button className="bg-pink-500 text-white px-4 py-2 rounded-xl">
              Add to Cart
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default ProductCard;