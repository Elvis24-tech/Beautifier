import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
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

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        setLoading(true);

        const [productsRes, ordersRes] = await Promise.all([
          fetch("https://beautifier-backend-iqvq.onrender.com/api/products/"),
          fetch("https://beautifier-backend-iqvq.onrender.com/api/orders/"),
        ]);

        const productsData = await productsRes.json();
        const ordersData = await ordersRes.json();

        const safeProducts = Array.isArray(productsData)
          ? productsData
          : productsData.results || [];

        const safeOrders = Array.isArray(ordersData)
          ? ordersData
          : ordersData.results || [];

        const totalSales = safeOrders.reduce((sum, order) => {
          return (
            sum +
            Number(order.total_price || order.total || order.amount || 0)
          );
        }, 0);

        setStats({
          products: safeProducts.length,
          orders: safeOrders.length,
          sales: totalSales,
        });

        setChartData(
          safeOrders.map((order, index) => ({
            order: `#${order.id || index + 1}`,
            sales: Number(order.total_price || order.total || order.amount || 0),
          }))
        );
      } catch (error) {
        console.log("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-amber-200">

      <div className="flex flex-col lg:flex-row">

        <Sidebar />

        <div className="flex-1 w-full p-4 sm:p-6 md:p-8">

          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Dashboard Overview
            </h1>

            <p className="text-black mt-2">
              Luxury beauty store performance analytics
            </p>
          </div>

          {/* LOADING */}
          {loading ? (
            <div className="bg-amber-100/70 border border-amber-300 rounded-2xl p-6 text-black">
              Loading dashboard...
            </div>
          ) : (
            <>
              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">

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
              <div className="bg-amber-100/70 rounded-3xl p-5 sm:p-6 shadow-lg border border-amber-300">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">

                  <h2 className="text-lg sm:text-xl font-black text-black uppercase">
                    Sales Activity
                  </h2>

                  <span className="text-black text-sm">
                    Total Orders: {stats.orders}
                  </span>

                </div>

                <div style={{ width: "100%", height: "320px" }}>

                  <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>

                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

                      <XAxis dataKey="order" tick={{ fontSize: 12, fill: "#000" }} />
                      <YAxis tick={{ fontSize: 12, fill: "#000" }} />

                      <Tooltip />

                      <Bar
                        dataKey="sales"
                        fill="#d97706"
                        radius={[8, 8, 0, 0]}
                        barSize={22}
                      />

                    </BarChart>

                  </ResponsiveContainer>

                </div>

              </div>

            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;