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
    <div className="flex flex-col lg:flex-row min-h-screen bg-amber-200">

      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 md:p-10">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">

          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-black uppercase">
              Products
            </h1>
            <p className="text-black mt-1 text-sm">
              Manage your beauty catalog
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-black text-amber-200 px-5 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition"
          >
            + Add Product
          </button>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-amber-100/70 border border-amber-300 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition overflow-hidden"
            >

              <img
                src={product.image}
                className="h-48 w-full object-cover"
                alt={product.name}
              />

              <div className="p-5 space-y-2">

                <h2 className="font-black text-black text-lg truncate">
                  {product.name}
                </h2>

                <p className="text-black font-black text-lg">
                  KES {Number(product.price).toLocaleString()}
                </p>

                <p className="text-black text-sm">
                  Stock:{" "}
                  <span className="font-bold text-black">
                    {product.stock}
                  </span>
                </p>

                <button
                  onClick={() => handleDelete(product.id)}
                  className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-2xl font-bold transition"
                >
                  Delete Product
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">

          <div className="bg-amber-100 w-full max-w-md rounded-3xl p-6 shadow-2xl border border-amber-300">

            <h2 className="text-2xl font-black text-black mb-5">
              Add Product
            </h2>

            <div className="space-y-3">

              <input
                placeholder="Product Name"
                className="w-full border border-amber-300 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-black"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Price"
                className="w-full border border-amber-300 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-black"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />

              <input
                placeholder="Stock"
                className="w-full border border-amber-300 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-black"
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: e.target.value })
                }
              />

              <input
                placeholder="Image URL"
                className="w-full border border-amber-300 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-black"
                value={form.image}
                onChange={(e) =>
                  setForm({ ...form, image: e.target.value })
                }
              />

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={handleCreate}
                className="flex-1 bg-black text-amber-200 py-3 rounded-2xl font-black hover:scale-105 transition"
              >
                Save Product
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-amber-200 text-black py-3 rounded-2xl font-bold hover:bg-amber-300 transition"
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