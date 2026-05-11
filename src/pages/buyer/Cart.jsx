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

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100 px-4 md:px-10 py-10">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-gray-800">
          Your Cart
        </h1>
        <p className="text-gray-500 mt-2">
          Review your selected beauty products
        </p>
      </div>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <div className="w-28 h-28 bg-white/60 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg text-5xl">
            🛒
          </div>

          <h2 className="text-2xl font-bold text-gray-700 mt-6">
            Your cart is empty
          </h2>

          <Link
            to="/buyer"
            className="mt-6 bg-linear-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE - PRODUCTS */}
          <div className="lg:col-span-2 space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg flex flex-col sm:flex-row gap-4 p-4 items-center"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div className="flex-1 w-full">

                  <h2 className="font-bold text-lg text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-pink-500 font-bold">
                    Ksh {item.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 bg-gray-200 rounded-full text-lg"
                    >
                      -
                    </button>

                    <span className="font-bold">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-10 h-10 bg-pink-500 text-white rounded-full text-lg"
                    >
                      +
                    </button>

                  </div>

                  <p className="text-sm mt-2 text-gray-600">
                    Subtotal:{" "}
                    <span className="text-pink-500 font-bold">
                      Ksh {item.price * item.quantity}
                    </span>
                  </p>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-bold text-xl"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>

          {/* RIGHT SIDE - CHECKOUT */}
          <div className="lg:col-span-1">

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/40 lg:sticky lg:top-20">

              <h2 className="text-2xl font-black mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-gray-600">

                <div className="flex justify-between">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-pink-500">
                    Ksh {totalPrice}
                  </span>
                </div>

              </div>

              <hr className="my-5" />

              <Link
                to="/buyer/checkout"
                className="block text-center bg-linear-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-bold hover:scale-105 transition"
              >
                Checkout
              </Link>

              <button
                onClick={clearCart}
                className="w-full mt-4 bg-red-500 text-white py-3 rounded-full font-bold hover:bg-red-600"
              >
                Clear Cart
              </button>

            </div>
          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;