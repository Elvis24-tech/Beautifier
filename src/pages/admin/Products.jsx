import { useState } from "react";
import Sidebar from "../../components/Sidebar";

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Glow Serum",
      price: "1200",
      stock: 10,
    },
    {
      id: 2,
      name: "Hydrating Cream",
      price: "1500",
      stock: 5,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-linear-to-br from-rose-50 via-pink-50 to-purple-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">

          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800">
              Products
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your beauty store inventory
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-linear-to-r from-pink-400 to-purple-400 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition w-full sm:w-auto"
          >
            + Add Product
          </button>

        </div>

        {/* PRODUCT GRID */}
        {products.length === 0 ? (
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-10 text-center">

            <div className="text-5xl mb-4">🛍️</div>

            <h2 className="text-xl font-bold text-gray-700">
              No products yet
            </h2>

            <p className="text-gray-500 mt-2">
              Start by adding your first beauty product.
            </p>

          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-6 hover:-translate-y-2 transition"
              >

                <h2 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  Price: Ksh {product.price}
                </p>

                <p className="text-gray-500 mt-1">
                  Stock: {product.stock}
                </p>

                {/* Actions */}
                <div className="flex gap-3 mt-5">

                  <button className="flex-1 bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition">
                    Edit
                  </button>

                  <button className="flex-1 bg-red-400 text-white py-2 rounded-xl hover:bg-red-500 transition">
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

        {/* MODAL (UI ONLY) */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">

            <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Add Product
              </h2>

              <input
                placeholder="Product name"
                className="w-full border rounded-xl p-3 mb-3"
              />

              <input
                placeholder="Price"
                className="w-full border rounded-xl p-3 mb-3"
              />

              <input
                placeholder="Stock"
                className="w-full border rounded-xl p-3 mb-5"
              />

              <div className="flex gap-3">

                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 py-3 rounded-xl"
                >
                  Cancel
                </button>

                <button className="flex-1 bg-linear-to-r from-pink-400 to-purple-400 text-white py-3 rounded-xl">
                  Save
                </button>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default Products;