import { useShop } from "../../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useShop();

  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-stone-100 px-4 md:px-10 py-10">

      {/* HEADER */}
      <div className="mb-10 flex items-center justify-between gap-4">

        <button
          onClick={() => navigate(-1)}
          className="bg-black text-amber-100 px-4 md:px-5 py-2 rounded-full shadow-lg hover:scale-105 transition text-sm md:text-base font-bold"
        >
          ← BACK
        </button>

        <div className="text-center flex-1">
          <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">
            Your Cart
          </h1>
          <p className="text-black/60 mt-2">
            Luxury beauty selections curated for you
          </p>
        </div>

        <div className="w-16 md:w-24" />
      </div>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-24">

          <div className="w-28 h-28 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl text-5xl border border-black/10">
            🛒
          </div>

          <h2 className="text-2xl font-black text-black mt-6">
            Your cart is empty
          </h2>

          <p className="text-black/50 mt-2">
            Add premium beauty products to get started
          </p>

          <Link
            to="/buyer"
            className="mt-6 bg-black text-amber-100 px-8 py-3 rounded-full shadow-xl hover:scale-105 transition font-bold"
          >
            START SHOPPING
          </Link>

        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT: CART ITEMS */}
          <div className="lg:col-span-2 space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-black/10 flex flex-col sm:flex-row gap-4 p-5 items-center"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-2xl"
                />

                <div className="flex-1 w-full">

                  <h2 className="font-black text-lg text-black uppercase">
                    {item.name}
                  </h2>

                  <p className="text-amber-600 font-black text-lg mt-1">
                    Ksh {item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 bg-black text-amber-100 rounded-full text-lg font-bold hover:scale-105 transition"
                    >
                      -
                    </button>

                    <span className="font-black text-black">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-10 h-10 bg-amber-200 text-black rounded-full text-lg font-bold hover:scale-105 transition"
                    >
                      +
                    </button>

                  </div>

                  <p className="text-sm mt-2 text-black/60">
                    Subtotal:{" "}
                    <span className="text-amber-600 font-black">
                      Ksh {item.price * item.quantity}
                    </span>
                  </p>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-black/60 hover:text-red-500 font-black text-xl transition"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>
          <div className="lg:col-span-1">

            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-black/10 lg:sticky lg:top-20">

              <h2 className="text-2xl font-black text-black mb-6 uppercase">
                Order Summary
              </h2>

              <div className="space-y-3 text-black/70">

                <div className="flex justify-between">
                  <span>Items</span>
                  <span className="font-bold text-black">{cart.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-black">Free</span>
                </div>

                <div className="flex justify-between text-lg font-black">
                  <span>Total</span>
                  <span className="text-amber-600">
                    Ksh {totalPrice}
                  </span>
                </div>

              </div>

              <hr className="my-5 border-black/10" />

              <Link
                to="/buyer/checkout"
                className="block text-center bg-black text-amber-100 py-3 rounded-full font-black hover:scale-105 transition"
              >
                CHECKOUT
              </Link>

              <button
                onClick={clearCart}
                className="w-full mt-4 bg-amber-200 text-black py-3 rounded-full font-black hover:bg-amber-300 transition"
              >
                CLEAR CART
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;