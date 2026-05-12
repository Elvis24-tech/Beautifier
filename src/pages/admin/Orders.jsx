import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/orders/"
        );

        const data = await response.json();

        setOrders(data);

      } catch (error) {
        console.log("Orders fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-linear-to-br from-rose-50 via-pink-50 to-purple-100">
      <Sidebar />
      <div className="flex-1 p-6 md:p-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-gray-800">
            Orders
          </h1>

          <p className="text-gray-500 mt-2">
            Manage customer orders and track deliveries
          </p>

        </div>
        {loading ? (
          <div className="text-gray-600 text-lg">
            Loading orders...
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-10 text-center">
            <div className="text-5xl mb-4">📦</div>
            <h2 className="text-xl font-bold text-gray-700">
              No orders yet
            </h2>

            <p className="text-gray-500 mt-2">
              Orders from customers will appear here once purchases are made.
            </p>

          </div>

        ) : (
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-pink-500 text-white">
                  <tr>
                    <th className="text-left p-4">Order ID</th>
                    <th className="text-left p-4">Customer</th>
                    <th className="text-left p-4">Phone</th>
                    <th className="text-left p-4">Total</th>
                    <th className="text-left p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-100 hover:bg-pink-50 transition"
                    >

                      <td className="p-4 font-bold">
                        #{order.id}
                      </td>

                      <td className="p-4">
                        {order.customer_name || "Customer"}
                      </td>

                      <td className="p-4">
                        {order.phone || "N/A"}
                      </td>

                      <td className="p-4 font-bold text-pink-500">
                        Ksh {order.total}
                      </td>

                      <td className="p-4">

                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                          Paid
                        </span>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Orders;