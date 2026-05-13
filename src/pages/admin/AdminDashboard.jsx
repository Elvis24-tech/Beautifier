import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

function AdminDashboard() {
  const [stats, setStats] = useState({
    orders: 0,
    products: 0,
    sales: 0,
  });

  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        setLoading(true);

        const [productsRes, ordersRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/api/products/"),
          fetch("http://127.0.0.1:8000/api/orders/"),
        ]);

        const products = await productsRes.json();
        const orders = await ordersRes.json();

        console.log("📦 PRODUCTS:", products);
        console.log("🧾 ORDERS:", orders);

        // 🔥 SAFETY CHECK (VERY IMPORTANT)
        const safeOrders = Array.isArray(orders) ? orders : [];

        // 💰 Try multiple possible backend fields
        const totalSales = safeOrders.reduce((sum, order) => {
          const value =
            Number(order.total_price) ||
            Number(order.total) ||
            Number(order.amount) ||
            0;

          return sum + value;
        }, 0);

        setStats({
          products: products?.length || 0,
          orders: safeOrders.length,
          sales: totalSales,
        });

        // 📊 Chart data
        const formattedChart = safeOrders.slice(-7).map((order, index) => ({
          time: `Order ${index + 1}`,
          sales:
            Number(order.total_price) ||
            Number(order.total) ||
            Number(order.amount) ||
            0,
        }));

        setChartData(formattedChart);

        setError(null);
      } catch (err) {
        console.error("Dashboard error:", err);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <div className="flex min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100">

      <Sidebar />

      <div className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 mt-2">
            Live store performance tracking
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-xl mb-6">
            {error}
          </div>
        )}

        {/* LOADING */}
        {loading ? (
          <div className="text-gray-600 text-lg">
            Loading dashboard...
          </div>
        ) : (
          <>
            {/* STATS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

              <DashboardCard
                title="Total Sales"
                value={`Ksh ${stats.sales.toLocaleString()}`}
              />

              <DashboardCard
                title="Orders"
                value={stats.orders}
              />

              <DashboardCard
                title="Products"
                value={stats.products}
              />

            </div>

            {/* CHART */}
            <div className="bg-white/70 rounded-3xl p-6">

              <h2 className="text-xl font-bold mb-6">
                Sales Activity
              </h2>

              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="sales"
                      fill="#ec4899"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;