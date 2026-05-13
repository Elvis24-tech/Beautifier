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
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  );

  const handlePay = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    try {
      setLoading(true);

      // MPESA PAYMENT
      const paymentResponse = await fetch(
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

      const paymentData = await paymentResponse.json();

      console.log("MPESA RESPONSE:", paymentData);

      if (!paymentResponse.ok) {
        alert(paymentData.error || "Payment failed");
        return;
      }
      const orderResponse = await fetch(
        "http://127.0.0.1:8000/api/orders/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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

      console.log("ORDER CREATED:", orderData);

      if (orderResponse.ok) {
        setShowMpesa(false);
        setSuccess(true);

        clearCart();
        setPhone("");
      } else {
        alert(orderData.error || "Order creation failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-purple-100 px-3 sm:px-6 lg:px-14 py-6 sm:py-10">
      <div className="mb-6 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800">
          Checkout
        </h1>

        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Complete your order securely with M-Pesa
        </p>
      </div>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 text-center shadow-lg max-w-xl mx-auto">

          <div className="text-5xl sm:text-6xl mb-4">
            🛒
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-700">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Add products to continue shopping
          </p>

          <Link
            to="/buyer/dashboard"
            className="inline-flex items-center justify-center mt-6 bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-2xl font-bold w-full sm:w-auto"
          >
            Go Shopping
          </Link>

        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">

          {/* CART ITEMS */}
          <div className="xl:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-4 sm:p-5 shadow-md border border-white/50"
              >

                <div className="flex flex-col sm:flex-row gap-4">

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-28 h-52 sm:h-28 object-cover rounded-2xl"
                  />

                  {/* CONTENT */}
                  <div className="flex-1">

                    <div className="flex justify-between gap-4">

                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                          {item.name}
                        </h2>

                        <p className="text-pink-500 font-bold mt-1">
                          Ksh {item.price}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-xl font-bold hover:scale-110 transition h-fit"
                      >
                        ✕
                      </button>

                    </div>

                    {/* QUANTITY */}
                    <div className="flex items-center gap-3 mt-5">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition font-bold text-lg"
                      >
                        -
                      </button>

                      <span className="font-bold text-lg min-w-5 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 transition text-white font-bold text-lg"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* SUMMARY */}
          <div className="xl:sticky xl:top-6 h-fit">

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-md border border-white/50">

              <h2 className="text-xl sm:text-2xl font-black text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Products</span>
                  <span>{cart.length}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Total Items</span>

                  <span>
                    {cart.reduce(
                      (sum, item) => sum + item.quantity,
                      0
                    )}
                  </span>

                </div>

                <div className="border-t pt-4 flex justify-between items-center">

                  <span className="text-lg font-bold text-gray-800">
                    Total
                  </span>

                  <span className="text-2xl font-black text-pink-500">
                    Ksh {total}
                  </span>

                </div>

              </div>

              <button
                onClick={() => setShowMpesa(true)}
                className="w-full mt-8 bg-green-500 hover:bg-green-600 transition text-white py-4 rounded-2xl font-black text-lg shadow-lg"
              >
                Place Order
              </button>

            </div>

          </div>

        </div>
      )}

      {/* MPESA MODAL */}
      {showMpesa && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 px-3 sm:px-4">

          <div className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-5 sm:p-7">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-black text-gray-800">
                M-Pesa Payment
              </h2>

              <button
                onClick={() => setShowMpesa(false)}
                className="text-gray-400 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>

            </div>

            <p className="text-gray-500 text-sm sm:text-base mb-5">
              Enter your M-Pesa phone number
            </p>

            <input
              type="text"
              placeholder="07XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 transition p-4 rounded-2xl outline-none text-lg"
            />

            <button
              onClick={handlePay}
              disabled={loading}
              className="w-full mt-5 bg-green-500 hover:bg-green-600 disabled:opacity-70 transition text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 text-lg"
            >

              {loading && <Spinner />}

              {loading
                ? "Sending Prompt..."
                : `Pay Ksh ${total}`}

            </button>

            <button
              onClick={() => setShowMpesa(false)}
              className="w-full mt-3 text-gray-500 font-medium py-2"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-3xl p-6 sm:p-8 text-center max-w-md w-full shadow-2xl">

            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">

              <span className="text-4xl text-green-600">
                ✓
              </span>

            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-3">
              Payment Successful
            </h2>

            <p className="text-gray-500 mb-7 text-sm sm:text-base">
              Your order has been placed successfully
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="w-full bg-green-500 hover:bg-green-600 transition text-white py-4 rounded-2xl font-black text-lg"
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