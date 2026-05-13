import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

import {
  getProducts,
  createProduct,
  deleteProduct,
} from "../../services/product";

function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.log("GET ERROR:", err.response?.data || err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreate = async () => {
    try {
      await createProduct({
        name: form.name,
        price: Number(form.price),
        stock: Number(form.stock),
        image: form.image,
      });

      setForm({ name: "", price: "", stock: "", image: "" });
      setShowModal(false);
      fetchProducts();
    } catch (err) {
      console.log("CREATE ERROR:", err.response?.data || err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (err) {
      console.log("DELETE ERROR:", err.response?.data || err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">

      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 md:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900">
            Products
          </h1>

          <button
            onClick={() => setShowModal(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl w-full sm:w-auto"
          >
            + Add Product
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-sm hover:shadow-md transition rounded-2xl overflow-hidden"
            >

              <img
                src={product.image}
                className="h-44 w-full object-cover"
                alt={product.name}
              />

              <div className="p-4 space-y-1">

                <h2 className="font-bold text-gray-900">
                  {product.name}
                </h2>

                <p className="text-gray-600">
                  KES {Number(product.price).toLocaleString()}
                </p>

                <p className="text-sm text-gray-400">
                  Stock: {product.stock}
                </p>

                <button
                  onClick={() => handleDelete(product.id)}
                  className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-5 sm:p-6">
            <h2 className="text-xl font-bold mb-4">
              Add Product
            </h2>
            <div className="space-y-3">
              <input
                placeholder="Name"
                className="w-full border p-3 rounded-xl"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Price"
                className="w-full border p-3 rounded-xl"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />

              <input
                placeholder="Stock"
                className="w-full border p-3 rounded-xl"
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: e.target.value })
                }
              />

              <input
                placeholder="Image URL"
                className="w-full border p-3 rounded-xl"
                value={form.image}
                onChange={(e) =>
                  setForm({ ...form, image: e.target.value })
                }
              />

            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-5">
              <button
                onClick={handleCreate}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl"
              >
                Save
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-xl"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
export default Products;