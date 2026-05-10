function Wishlist() {
    return (
      <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100 px-6 md:px-12 py-12">
  
        {/* Header */}
        <div className="mb-10">
  
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Your Wishlist
          </h1>
  
          <p className="text-gray-500 mt-2">
            Save your favorite beauty products for later
          </p>
  
        </div>
  
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center text-center mt-20">
  
          <div className="w-32 h-32 bg-white/60 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg">
            💖
          </div>
  
          <h2 className="text-2xl font-bold text-gray-700 mt-6">
            Your wishlist is empty
          </h2>
  
          <p className="text-gray-500 mt-2 max-w-md">
            Start adding beauty products you love so you can find them easily later.
          </p>
  
          <button className="mt-8 bg-linear-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition">
            Explore Products
          </button>
  
        </div>
  
      </div>
    );
  }
  
  export default Wishlist;