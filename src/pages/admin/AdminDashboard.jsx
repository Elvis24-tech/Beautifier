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
  const [data, setData] = useState([
    { time: "10s", sales: 20 },
    { time: "20s", sales: 40 },
    { time: "30s", sales: 25 },
    { time: "40s", sales: 60 },
    { time: "50s", sales: 45 },
  ]);

  // Fake real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newPoint = {
          time: `${(prev.length + 1) * 10}s`,
          sales: Math.floor(Math.random() * 100),
        };

        return [...prev, newPoint].slice(-8);
      });
    }, 3000);

    return () => clearInterval(interval);
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

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          <DashboardCard title="Total Sales" value="Ksh 120,000" />
          <DashboardCard title="Orders" value="320" />
          <DashboardCard title="Products" value="85" />

        </div>

        {/* BAR CHART */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-6 md:p-8">

          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Live Sales Activity
          </h2>

          <div className="h-72">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>

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

      </div>

    </div>
  );
}

export default AdminDashboard;