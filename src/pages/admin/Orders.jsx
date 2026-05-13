import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
function OrderCard({ order }) {
  const itemCount = order.items?.length || 0;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="font-bold text-gray-900 text-lg">
              Order #{order.id}
            </h2>

            <p className="mt-1 text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg inline-block w-fit">
              {order.phone || "No phone provided"}
            </p>
          </div>

          <p className="font-black text-gray-900 text-lg">
            Ksh {Number(order.total_price).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between text-xs text-gray-400 border-t border-gray-50 pt-3 mb-4">
          <span className="text-rose-500 font-semibold">
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
        <div className="space-y-2">
          {order.items?.length > 0 ? (
            order.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center rounded-xl px-4 py-3 text-sm border hover:shadow-sm transition"
              >
                <span className="font-semibold text-blue-600 truncate max-w-[50%]">
                  {item.product_name || "Product"}
                </span>

                <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                  x{item.quantity}
                </span>

                <span className="font-bold text-rose-500 whitespace-nowrap">
                  Ksh {Number(item.price).toLocaleString()}
                </span>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400 text-center py-2">
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
    <div className="min-h-screen flex items-stretch bg-[#f7f7fb]">
      <Sidebar />
      <div className="flex-1 min-h-screen p-5 sm:p-8 md:p-10">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900">
            Orders
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Track all customer purchases
          </p>
        </div>
        {loading ? (
          <div className="space-y-4">
            <div className="h-24 bg-gray-100 rounded-2xl animate-pulse" />
            <div className="h-24 bg-gray-100 rounded-2xl animate-pulse" />
            <div className="h-24 bg-gray-100 rounded-2xl animate-pulse" />
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center">
            <h3 className="font-bold text-gray-800 text-lg">
              No orders yet
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Orders will appear here when customers make purchases
            </p>
          </div>
        ) : (
          <div className="space-y-4">
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