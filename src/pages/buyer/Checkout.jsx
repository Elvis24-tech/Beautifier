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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePay = async () => {
    if (!phone) return;

    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/api/mpesa/stkpush/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone,
            amount: total,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setShowMpesa(false);
        setSuccess(true);

        clearCart();
        setPhone("");
      } else {
        console.log(data.error || "Payment failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const Spinner = () => (
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-purple-100 px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      <h1 className="text-3xl sm:text-4xl font-black mb-8 text-gray-800">
        Checkout
      </h1>
      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-xl font-bold text-gray-700">
            Your cart is empty 🛒
          </h2>

          <Link
            to="/buyer/dashboard"
            className="inline-block mt-6 bg-pink-500 text-white px-6 py-3 rounded-full"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white/70 rounded-2xl p-4 flex gap-4 items-center"
              >
                <img
                  src={item.image}
                  className="w-20 h-20 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-pink-500">Ksh {item.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white/70 rounded-2xl p-6 h-fit">

            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Total</span>
              <span className="text-pink-500 font-bold">Ksh {total}</span>
            </div>

            <button
              onClick={() => setShowMpesa(true)}
              className="w-full mt-6 bg-green-500 text-white py-3 rounded-xl font-bold"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
      {showMpesa && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4">

          <div className="bg-white w-full max-w-sm rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-2">M-Pesa Payment</h2>

            <input
              type="text"
              placeholder="07XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 rounded-xl mb-4"
            />

            <button
              onClick={handlePay}
              disabled={loading}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              {loading && <Spinner />}
              {loading ? "Sending Prompt Shortly" : `Pay Ksh ${total}`}
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
      {success && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-6 text-center max-w-sm w-full">
            <div className="text-green-500 text-4xl mb-2">✔</div>
            <h2 className="text-xl font-bold mb-2">
              Payment Successful
            </h2>

            <p className="text-gray-500 mb-4">
              Your order has been placed successfully.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-bold"
            >
              Continue
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Checkout;