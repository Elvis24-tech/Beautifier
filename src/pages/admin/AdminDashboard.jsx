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

  // 🔥 Fetch real backend data
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const [productsRes, ordersRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/api/products/"),
          fetch("http://127.0.0.1:8000/api/orders/"),
        ]);

        const products = await productsRes.json();
        const orders = await ordersRes.json();

        // 💰 Calculate total sales (adjust field if needed)
        const totalSales = orders.reduce((sum, order) => {
          return sum + Number(order.total || 0);
        }, 0);

        setStats({
          products: products.length,
          orders: orders.length,
          sales: totalSales,
        });

        // 📊 Build simple chart data from orders (last 7 entries)
        const formattedChart = orders.slice(-7).map((order, index) => ({
          time: `Order ${index + 1}`,
          sales: Number(order.total || 0),
        }));

        setChartData(formattedChart);
        setLoading(false);
      } catch (error) {
        console.error("Dashboard fetch error:", error);
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <div className="flex min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Dashboard Overview
          </h1>

          <p className="text-gray-500 mt-2">
            Live store performance tracking
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-gray-600 text-lg">Loading dashboard...</div>
        ) : (
          <>
            {/* Cards */}
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

            {/* BAR CHART */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-6 md:p-8">

              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Sales Activity (Real Orders)
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