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

  const Spinner = () => (
    <div className="w-5 h-5 border-2 border-amber-200 border-t-transparent rounded-full animate-spin" />
  );

  const handlePay = async () => {
    if (!phone) return alert("Enter phone number");

    try {
      setLoading(true);

      const paymentResponse = await fetch(
        "https://beautifier-backend-iqvq.onrender.com/api/mpesa/stkpush/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, amount: total }),
        }
      );

      const paymentData = await paymentResponse.json();

      if (!paymentResponse.ok) {
        alert(paymentData.error || "Payment failed");
        return;
      }

      const orderResponse = await fetch(
        "https://beautifier-backend-iqvq.onrender.com/api/orders/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone,
            total,
            items: cart.map((item) => ({
              id: item.id,
              quantity: item.quantity,
            })),
          }),
        }
      );

      const orderData = await orderResponse.json();

      if (orderResponse.ok) {
        setShowMpesa(false);
        setSuccess(true);
        clearCart();
        setPhone("");
      } else {
        alert(orderData.error || "Order failed");
      }
    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-200 via-amber-100 to-yellow-100 px-4 sm:px-8 lg:px-16 py-10 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-300/40 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/30 blur-[180px] rounded-full" />
      <div className="relative z-10 mb-10">
        <h1 className="text-4xl sm:text-6xl font-black text-black uppercase">
          Checkout
        </h1>
        <p className="text-black/70 mt-2">
          Complete your M-Pesa payment securely
        </p>
      </div>
      {cart.length === 0 ? (
        <div className="relative z-10 bg-amber-100/70 border border-amber-300 rounded-3xl p-10 text-center shadow-xl">
          <div className="text-6xl">🛒</div>
          <h2 className="text-2xl font-black text-black mt-4">
            Your cart is empty
          </h2>

          <p className="text-black/60 mt-2">
            Add products to continue shopping
          </p>

          <Link
            to="/buyer/dashboard"
            className="inline-block mt-6 bg-black text-amber-200 px-10 py-3 rounded-full font-black hover:scale-105 transition"
          >
            START SHOPPING
          </Link>
        </div>
      ) : (
        <div className="relative z-10 grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-amber-100/80 border border-amber-300 rounded-3xl p-5 shadow-lg flex flex-col sm:flex-row gap-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-2xl"
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-lg font-black text-black uppercase">
                        {item.name}
                      </h2>
                      <p className="text-amber-700 font-black">
                        Ksh {item.price}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-black/40 hover:text-red-500 text-xl font-black"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 rounded-full bg-black text-amber-200 font-bold"
                    >
                      -
                    </button>

                    <span className="font-black text-black">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-10 h-10 rounded-full bg-amber-300 text-black font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="xl:sticky xl:top-10 h-fit">
            <div className="bg-amber-100/90 border border-amber-300 rounded-3xl p-6 shadow-xl">
              <h2 className="text-2xl font-black text-black uppercase mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-black/70">
                <div className="flex justify-between">
                  <span>Items</span>
                  <span className="font-bold text-black">{cart.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span className="font-bold text-black">
                    {cart.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                </div>

                <div className="flex justify-between text-lg font-black">
                  <span>Total</span>
                  <span className="text-amber-700">Ksh {total}</span>
                </div>
              </div>

              <button
                onClick={() => setShowMpesa(true)}
                className="w-full mt-8 bg-black text-amber-200 py-3 rounded-full font-black hover:scale-105 transition"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      )}
      {showMpesa && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-amber-50 border border-amber-300 w-full max-w-md rounded-3xl p-6 shadow-2xl">

            <h2 className="text-2xl font-black text-black mb-4">
              M-Pesa Payment
            </h2>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07XXXXXXXX"
              className="w-full border border-amber-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-amber-400"
            />

            <button
              onClick={handlePay}
              disabled={loading}
              className="w-full mt-5 bg-black text-amber-200 py-4 rounded-2xl font-black flex items-center justify-center gap-3"
            >
              {loading && <Spinner />}
              {loading ? "Processing..." : `Pay Ksh ${total}`}
            </button>

            <button
              onClick={() => setShowMpesa(false)}
              className="w-full mt-3 text-black/60"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {success && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-amber-100 border border-amber-300 rounded-3xl p-8 text-center shadow-2xl">
            <div className="text-6xl">✔</div>
            <h2 className="text-2xl font-black text-black mt-3">
              Payment Successful
            </h2>

            <p className="text-black/60 mt-2">
              Your order has been placed successfully
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-6 bg-black text-amber-200 px-10 py-3 rounded-full font-black hover:scale-105 transition"
            >
              CONTINUE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;