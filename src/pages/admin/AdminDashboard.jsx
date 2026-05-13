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
          fetch("http://127.0.0.1:8000/api/products/"),
          fetch("http://127.0.0.1:8000/api/orders/"),
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
            Number(
              order.total_price ||
                order.total ||
                order.amount ||
                0
            )
          );
        }, 0);

        setStats({
          products: safeProducts.length,
          orders: safeOrders.length,
          sales: totalSales,
        });

        const formattedChartData = safeOrders.map(
          (order, index) => ({
            order: `#${order.id || index + 1}`,
            sales: Number(
              order.total_price ||
                order.total ||
                order.amount ||
                0
            ),
          })
        );

        setChartData(formattedChartData);
      } catch (error) {
        console.log("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-100">
      {/* MOBILE LAYOUT */}
      <div className="flex flex-col lg:flex-row">
        <Sidebar />

        <div className="flex-1 w-full p-4 sm:p-6 md:p-8">
          {/* HEADER */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 leading-tight">
              Dashboard Overview
            </h1>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Live store performance tracking
            </p>
          </div>

          {/* LOADING */}
          {loading ? (
            <div className="bg-white rounded-2xl p-6 shadow-sm text-gray-600">
              Loading dashboard...
            </div>
          ) : (
            <>
              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
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

              {/* CHART CARD */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm">
                {/* TOP */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                    Sales Activity
                  </h2>

                  <span className="text-sm text-gray-500">
                    Total Orders: {stats.orders}
                  </span>
                </div>

                {/* MOBILE FRIENDLY SCROLL */}
                <div className="overflow-x-auto">
                  <div
                    className="min-w-full"
                    style={{
                      width:
                        chartData.length < 6
                          ? "100%"
                          : `${chartData.length * 65}px`,
                      height: "300px",
                    }}
                  >
                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                    >
                      <BarChart
                        data={chartData}
                        margin={{
                          top: 10,
                          right: 10,
                          left: -20,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                          dataKey="order"
                          tick={{ fontSize: 11 }}
                        />

                        <YAxis tick={{ fontSize: 11 }} />

                        <Tooltip />

                        <Bar
                          dataKey="sales"
                          fill="#ec4899"
                          radius={[5, 5, 0, 0]}
                          barSize={20}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
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