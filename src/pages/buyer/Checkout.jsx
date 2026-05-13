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
    <div className="w-5 h-5 border-2 border-amber-100 border-t-transparent rounded-full animate-spin"></div>
  );

  const handlePay = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    try {
      setLoading(true);

      const paymentResponse = await fetch(
        "http://127.0.0.1:8000/api/mpesa/stkpush/",
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
        "http://127.0.0.1:8000/api/orders/",
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
        alert(orderData.error || "Order creation failed");
      }
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-stone-100 px-3 sm:px-6 lg:px-14 py-6 sm:py-10">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-5xl font-black text-black uppercase">
          Checkout
        </h1>
        <p className="text-black/60 mt-2">
          Complete your luxury beauty order securely via M-Pesa
        </p>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 text-center shadow-xl border border-black/10">

          <div className="text-5xl mb-4">🛒</div>

          <h2 className="text-2xl font-black text-black">
            Your cart is empty
          </h2>

          <p className="text-black/60 mt-2">
            Add premium products to continue
          </p>

          <Link
            to="/buyer/dashboard"
            className="inline-block mt-6 bg-black text-amber-100 px-8 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            START SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* ITEMS */}
          <div className="xl:col-span-2 space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 shadow-xl border border-black/10 flex flex-col sm:flex-row gap-4"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-28 h-40 sm:h-28 object-cover rounded-2xl"
                />

                <div className="flex-1">

                  <div className="flex justify-between">

                    <div>
                      <h2 className="text-lg font-black text-black uppercase">
                        {item.name}
                      </h2>

                      <p className="text-amber-600 font-black mt-1">
                        Ksh {item.price}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-black/40 hover:text-red-500 font-black text-xl"
                    >
                      ✕
                    </button>

                  </div>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-5">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 rounded-full bg-black text-amber-100 font-bold"
                    >
                      -
                    </button>

                    <span className="font-black text-black">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-10 h-10 rounded-full bg-amber-200 text-black font-bold"
                    >
                      +
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* SUMMARY */}
          <div className="xl:sticky xl:top-6 h-fit">

            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-black/10">

              <h2 className="text-2xl font-black text-black uppercase mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-black/70">

                <div className="flex justify-between">
                  <span>Items</span>
                  <span className="font-bold text-black">{cart.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Total Quantity</span>
                  <span className="font-bold text-black">
                    {cart.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                </div>

                <div className="flex justify-between text-lg font-black">
                  <span>Total</span>
                  <span className="text-amber-600">
                    Ksh {total}
                  </span>
                </div>

              </div>

              <button
                onClick={() => setShowMpesa(true)}
                className="w-full mt-8 bg-black text-amber-100 py-3 rounded-full font-black hover:scale-105 transition"
              >
                PLACE ORDER
              </button>

            </div>

          </div>

        </div>
      )}

      {/* MPESA MODAL */}
      {showMpesa && (
        <div className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 px-3">

          <div className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-black/10">

            <h2 className="text-2xl font-black text-black mb-4">
              M-Pesa Payment
            </h2>

            <input
              type="text"
              placeholder="07XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-black/10 p-4 rounded-2xl outline-none focus:border-amber-400"
            />

            <button
              onClick={handlePay}
              disabled={loading}
              className="w-full mt-5 bg-black text-amber-100 py-4 rounded-2xl font-black flex justify-center items-center gap-3"
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

      {/* SUCCESS */}
      {success && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-3xl p-8 text-center shadow-2xl border border-black/10">

            <div className="text-5xl mb-4">✔</div>

            <h2 className="text-2xl font-black text-black">
              Payment Successful
            </h2>

            <p className="text-black/60 mt-2">
              Your order has been placed successfully
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-6 bg-black text-amber-100 px-8 py-3 rounded-full font-black hover:scale-105 transition"
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