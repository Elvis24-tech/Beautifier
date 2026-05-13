import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

function OrderCard({ order }) {
  const itemCount = order.items?.length || 0;

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl shadow-xl hover:shadow-2xl transition overflow-hidden">

      <div className="p-5 sm:p-6">

        {/* TOP */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">

          <div>
            <h2 className="font-black text-black text-base sm:text-lg uppercase">
              Order #{order.id}
            </h2>

            <p className="mt-2 text-xs sm:text-sm font-bold text-black bg-amber-100 px-3 py-1 rounded-full inline-block">
              {order.phone || "No phone provided"}
            </p>
          </div>

          <p className="font-black text-amber-600 text-lg sm:text-right">
            Ksh {Number(order.total_price).toLocaleString()}
          </p>

        </div>

        {/* META */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-black/60 border-t border-black/10 pt-3 mb-4">

          <span className="text-black font-semibold">
            {itemCount} item{itemCount !== 1 ? "s" : ""}
          </span>

          {order.created_at && (
            <span>
              {new Date(order.created_at).toLocaleDateString("en-KE", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          )}

        </div>

        {/* ITEMS */}
        <div className="space-y-2">

          {order.items?.length > 0 ? (
            order.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-2xl px-4 py-3 text-sm border border-black/10 hover:bg-amber-50 transition"
              >

                <span className="font-bold text-black truncate">
                  {item.product_name || "Product"}
                </span>

                <span className="text-xs font-bold text-black bg-amber-200 px-2 py-1 rounded-full w-fit">
                  x{item.quantity}
                </span>

                <span className="font-black text-amber-600 sm:text-right whitespace-nowrap">
                  Ksh {Number(item.price).toLocaleString()}
                </span>

              </div>
            ))
          ) : (
            <p className="text-sm text-black/40 text-center py-2">
              No items found
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/orders/");
        const data = await res.json();
        setOrders(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        console.log("Orders fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-linear-to-br from-amber-50 via-yellow-50 to-stone-100">

      <Sidebar />

      <div className="flex-1 min-h-screen p-4 sm:p-8 md:p-10">

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-2xl sm:text-4xl font-black text-black uppercase">
            Orders
          </h1>

          <p className="text-black/60 mt-2">
            Track and manage customer purchases in real time
          </p>

        </div>

        {/* LOADING */}
        {loading ? (
          <div className="space-y-4">
            <div className="h-20 bg-white/70 rounded-2xl animate-pulse" />
            <div className="h-20 bg-white/70 rounded-2xl animate-pulse" />
            <div className="h-20 bg-white/70 rounded-2xl animate-pulse" />
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white/80 border border-black/10 rounded-3xl p-10 text-center shadow-xl">

            <h3 className="font-black text-black text-lg">
              No orders yet
            </h3>

            <p className="text-black/50 mt-1">
              Orders will appear here when customers make purchases
            </p>

          </div>
        ) : (
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default Orders;