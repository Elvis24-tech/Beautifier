import { useShop } from "../../context/ShopContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useShop();

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100 px-6 md:px-12 py-12">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

        <div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Your Cart
          </h1>

          <p className="text-gray-500 mt-2">
            Review your selected beauty products
          </p>
        </div>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl shadow-md transition"
          >
            Clear Cart
          </button>
        )}

      </div>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-20">

          <div className="w-32 h-32 bg-white/60 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg text-5xl">
            🛒
          </div>

          <h2 className="text-2xl font-bold text-gray-700 mt-6">
            Your cart is empty
          </h2>

          <Link
            to="/buyer"
            className="mt-8 bg-linear-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
          >
            Start Shopping
          </Link>

        </div>
      ) : (
        <>
          {/* PRODUCTS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">

                  <h2 className="font-bold text-2xl text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-pink-500 font-black text-xl mt-2">
                    Ksh {item.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-4 mt-6">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-xl"
                    >
                      -
                    </button>

                    <span className="text-xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-xl"
                    >
                      +
                    </button>

                  </div>

                  {/* SUBTOTAL */}
                  <p className="mt-5 text-gray-700 font-semibold">
                    Subtotal:
                    <span className="text-pink-500 ml-2">
                      Ksh {item.price * item.quantity}
                    </span>
                  </p>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-2xl transition"
                  >
                    Remove Item
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* TOTAL */}
          <div className="mt-12 bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between">

            <div>
              <p className="text-gray-500 text-lg">
                Total Price
              </p>

              <h2 className="text-4xl font-black text-pink-500 mt-2">
                Ksh {totalPrice}
              </h2>
            </div>

            {/* FIXED CHECKOUT BUTTON */}
            <Link
              to="/buyer/checkout"
              className="mt-6 md:mt-0 bg-linear-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition"
            >
              Checkout
            </Link>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;