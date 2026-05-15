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
    <div className="min-h-screen bg-amber-200 relative overflow-hidden px-4 md:px-10 py-10">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-300/50 blur-[140px] rounded-full"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-amber-400/40 blur-[160px] rounded-full"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-amber-500/30 blur-[180px] rounded-full"></div>
      <div className="relative z-10 mb-10 flex items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-black text-amber-200 px-4 md:px-5 py-2 rounded-full font-bold hover:scale-105 transition"
        >
          BACK
        </button>

        <div className="text-center flex-1">
          <h1 className="text-3xl md:text-5xl font-black text-black uppercase">
            Your Cart
          </h1>
          <p className="text-black mt-2 text-sm md:text-base">
            Luxury beauty selections curated for you
          </p>
        </div>

        <div className="w-16 md:w-24" />
      </div>
      {cart.length === 0 ? (
        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-24">

          <div className="w-28 h-28 bg-amber-300 rounded-full flex items-center justify-center shadow-2xl text-5xl border border-amber-400">
            🛒
          </div>

          <h2 className="text-2xl font-black text-black mt-6">
            Your cart is empty
          </h2>

          <p className="text-black/70 mt-2">
            Add premium beauty products to get started
          </p>

          <Link
            to="/buyer"
            className="mt-6 bg-black text-amber-200 px-8 py-3 rounded-full font-black hover:scale-105 transition"
          >
            START SHOPPING
          </Link>
        </div>
      ) : (
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-amber-100 border border-amber-300 rounded-3xl shadow-xl flex flex-col sm:flex-row gap-4 p-5 items-center hover:scale-[1.01] transition"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-2xl border border-amber-300"
                />

                <div className="flex-1 w-full">
                  <h2 className="font-black text-lg text-black uppercase">
                    {item.name}
                  </h2>

                  <p className="text-black font-black text-lg mt-1">
                    Ksh {item.price}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 bg-black text-amber-200 rounded-full font-bold hover:scale-105 transition"
                    >
                      -
                    </button>

                    <span className="font-black text-black">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-10 h-10 bg-amber-300 text-black rounded-full font-bold hover:scale-105 transition border border-amber-400"
                    >
                      +
                    </button>

                  </div>

                  <p className="text-sm mt-2 text-black/70">
                    Subtotal:{" "}
                    <span className="text-black font-black">
                      Ksh {item.price * item.quantity}
                    </span>
                  </p>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-black/60 hover:text-red-600 font-black text-xl transition"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>
          <div className="lg:col-span-1">
            <div className="bg-amber-100 border border-amber-300 rounded-3xl p-6 shadow-2xl lg:sticky lg:top-20">
              <h2 className="text-2xl font-black text-black mb-6 uppercase">
                Order Summary
              </h2>

              <div className="space-y-3 text-black/80">
                <div className="flex justify-between">
                  <span>Items</span>
                  <span className="font-black text-black">{cart.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-black text-black">Free</span>
                </div>
                <div className="flex justify-between text-lg font-black">
                  <span>Total</span>
                  <span className="text-black">
                    Ksh {totalPrice}
                  </span>
                </div>

              </div>

              <hr className="my-5 border-amber-300" />

              <Link
                to="/buyer/checkout"
                className="block text-center bg-black text-amber-200 py-3 rounded-full font-black hover:scale-105 transition"
              >
                CHECKOUT
              </Link>

              <button
                onClick={clearCart}
                className="w-full mt-4 bg-amber-300 text-black py-3 rounded-full font-black hover:bg-amber-400 transition"
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