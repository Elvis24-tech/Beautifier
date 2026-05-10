import Sidebar from "../../components/Sidebar";

function Orders() {
  return (
    <div className="flex bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold">
          Orders
        </h1>

      </div>

    </div>
  );
}

export default Orders;