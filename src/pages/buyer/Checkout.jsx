import { useState } from "react";
import { useShop } from "../../context/ShopContext";
import { Link } from "react-router-dom";

function Checkout() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useShop();

  const [phone, setPhone] = useState("");
  const [showMpesa, setShowMpesa] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePay = () => {
    if (!phone) return alert("Enter phone number");

    alert(`STK Push sent to ${phone} for Ksh ${total}`);

    clearCart();
    setShowMpesa(false);
    setPhone("");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-purple-100 px-4 sm:px-6 md:px-10 lg:px-16 py-10">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
          Checkout
        </h1>
      </div>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700">
            Your cart is empty 🛒
          </h2>

          <Link
            to="/buyer/dashboard"
            className="inline-block mt-6 bg-linear-to-r from-pink-400 to-purple-400 text-white px-6 sm:px-8 py-3 rounded-full"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* PRODUCTS */}
          <div className="lg:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow flex flex-col sm:flex-row gap-4 sm:items-center"
              >

                <img
                  src={item.image}
                  className="w-full sm:w-20 h-40 sm:h-20 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h2 className="font-bold text-lg">{item.name}</h2>

                  <p className="text-pink-500 font-bold">
                    Ksh {item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-2">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-9 h-9 bg-gray-200 rounded-full"
                    >
                      -
                    </button>

                    <span className="font-bold">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-9 h-9 bg-pink-500 text-white rounded-full"
                    >
                      +
                    </button>

                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="self-end sm:self-center text-red-500 font-bold"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>

          {/* SUMMARY */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl h-fit">

            <h2 className="text-xl sm:text-2xl font-black mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between text-sm sm:text-base mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-sm sm:text-base mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-lg sm:text-xl font-black">
              <span>Total</span>
              <span className="text-pink-500">Ksh {total}</span>
            </div>

            <button
              onClick={() => setShowMpesa(true)}
              className="w-full mt-6 bg-linear-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-bold"
            >
              Place Order
            </button>

            <Link
              to="/buyer/dashboard"
              className="block text-center mt-4 text-gray-500"
            >
              ← Continue Shopping
            </Link>

          </div>

        </div>
      )}

      {/* ================= MPESA MODAL ================= */}
      {showMpesa && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4">

          <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-xl">

            <h2 className="text-xl font-bold mb-2">
              M-Pesa Payment
            </h2>

            <p className="text-gray-500 mb-4 text-sm">
              Enter your phone number
            </p>

            <input
              type="text"
              placeholder="07XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 rounded-xl mb-4"
            />

            <button
              onClick={handlePay}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-bold"
            >
              Pay Ksh {total}
            </button>

            <button
              onClick={() => setShowMpesa(false)}
              className="w-full mt-3 text-gray-500"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Checkout;