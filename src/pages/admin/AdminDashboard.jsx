import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

function AdminDashboard() {
  return (
    <div className="flex bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <DashboardCard
            title="Total Sales"
            value="Ksh 120,000"
          />

          <DashboardCard
            title="Orders"
            value="320"
          />

          <DashboardCard
            title="Products"
            value="85"
          />

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;