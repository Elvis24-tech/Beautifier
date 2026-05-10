import Sidebar from "../../components/Sidebar";

function Products() {
  return (
    <div className="flex bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-10">

        <div className="flex justify-between items-center">

          <h1 className="text-4xl font-bold">
            Products
          </h1>

          <button className="bg-pink-500 text-white px-5 py-3 rounded-xl">
            Add Product
          </button>

        </div>

      </div>

    </div>
  );
}

export default Products;