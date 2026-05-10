import Sidebar from "../../components/Sidebar";

function Orders() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-linear-to-br from-rose-50 via-pink-50 to-purple-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="mb-8">

          <h1 className="text-3xl md:text-4xl font-black text-gray-800">
            Orders
          </h1>

          <p className="text-gray-500 mt-2">
            Manage customer orders and track deliveries
          </p>

        </div>

        {/* Empty State Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-10 text-center">

          <div className="text-5xl mb-4">📦</div>

          <h2 className="text-xl font-bold text-gray-700">
            No orders yet
          </h2>

          <p className="text-gray-500 mt-2">
            Orders from customers will appear here once purchases are made.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Orders;