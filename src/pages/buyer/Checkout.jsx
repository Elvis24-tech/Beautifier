import { useShop } from "../../context/ShopContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useShop();

  // TOTAL PRICE
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-purple-100 px-6 md:px-16 py-12">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-gray-800">
          Checkout
        </h1>

        <p className="text-gray-500 mt-2">
          Review your order before payment
        </p>
      </div>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-gray-700">
            Your cart is empty 🛒
          </h2>

          <Link
            to="/buyer/dashboard"
            className="inline-block mt-6 bg-linear-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">

          {/* PRODUCTS */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 shadow-lg flex gap-4 items-center"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />

                {/* DETAILS */}
                <div className="flex-1">

                  <h2 className="font-bold text-lg">
                    {item.name}
                  </h2>

                  <p className="text-pink-500 font-bold">
                    Ksh {item.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-2">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 bg-gray-200 rounded-full"
                    >
                      -
                    </button>

                    <span className="font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 bg-pink-500 text-white rounded-full"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-bold"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>

          {/* SUMMARY */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl h-fit">

            <h2 className="text-2xl font-black mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-black">
              <span>Total</span>
              <span className="text-pink-500">
                Ksh {total}
              </span>
            </div>

            {/* CHECKOUT BUTTON */}
            <button className="w-full mt-6 bg-linear-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-bold hover:scale-105 transition">
              Place Order
            </button>

            {/* BACK */}
            <Link
              to="/buyer/dashboard"
              className="block text-center mt-4 text-gray-500 hover:text-gray-700"
            >
              ← Continue Shopping
            </Link>

          </div>

        </div>
      )}

    </div>
  );
}

export default Checkout;