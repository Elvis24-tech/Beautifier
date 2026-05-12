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

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handlePay = async () => {
    if (!phone) return alert("Enter phone number");

    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/api/mpesa/stkpush/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phone,
          amount: total,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("📲 STK Push sent! Check your phone.");

        clearCart();
        setShowMpesa(false);
        setPhone("");
      } else {
        alert(data.error || "Payment failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-purple-100 px-4 sm:px-6 md:px-10 lg:px-16 py-10">

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
          Checkout
        </h1>
      </div>

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
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white/70 p-4 rounded-2xl flex gap-4 items-center">

                <img src={item.image} className="w-20 h-20 object-cover rounded-xl" />

                <div className="flex-1">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-pink-500">Ksh {item.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>

                <button onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            ))}
          </div>
          <div className="bg-white/70 p-6 rounded-2xl h-fit">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="flex justify-between mt-4">
              <span>Total</span>
              <span className="text-pink-500 font-bold">Ksh {total}</span>
            </div>

            <button
              onClick={() => setShowMpesa(true)}
              className="w-full mt-6 bg-green-500 text-white py-3 rounded-full font-bold"
            >
              Place Order
            </button>
          </div>

        </div>
      )}
      {showMpesa && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl w-full max-w-sm">

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
              className="w-full bg-green-500 text-white py-3 rounded-xl font-bold"
            >
              {loading ? "Sending STK..." : `Pay Ksh ${total}`}
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