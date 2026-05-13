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

        console.log("ORDERS API RESPONSE:", data);

        const ordersArray =
          Array.isArray(data)
            ? data
            : data.results
            ? data.results
            : data.orders
            ? data.orders
            : [];

        setOrders(ordersArray);
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

        <h1 className="text-3xl font-black mb-6">Orders</h1>

        {loading ? (
          <p>Loading...</p>
        ) : orders.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl text-center">
            No orders found 📦
          </div>
        ) : (
          <div className="bg-white rounded-2xl overflow-hidden">

            <table className="w-full">
              <thead className="bg-pink-500 text-white">
                <tr>
                  <th className="p-4">ID</th>
                  <th>Phone</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="p-4">#{order.id}</td>
                    <td className="p-4">{order.phone || "N/A"}</td>

                    <td className="p-4 font-bold text-pink-500">
                      Ksh {order.total_price || order.total || 0}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}

      </div>
    </div>
  );
}

export default Orders;