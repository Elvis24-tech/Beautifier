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

  // GET PRODUCTS
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

  // CREATE PRODUCT
  const handleCreate = async () => {
    try {
      const payload = {
        name: form.name,
        price: Number(form.price),
        stock: Number(form.stock),
        image: form.image,
      };

      await createProduct(payload);

      setForm({
        name: "",
        price: "",
        stock: "",
        image: "",
      });

      setShowModal(false);
      fetchProducts();
    } catch (err) {
      console.log("CREATE ERROR:", err.response?.data || err);
    }
  };

  // DELETE PRODUCT
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (err) {
      console.log("DELETE ERROR:", err.response?.data || err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 p-6">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products</h1>

          <button
            onClick={() => setShowModal(true)}
            className="bg-pink-500 text-white px-4 py-2 rounded-xl"
          >
            + Add Product
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-xl overflow-hidden"
            >

              <img
                src={product.image}
                className="h-40 w-full object-cover"
                alt={product.name}
              />

              <div className="p-4">

                <h2 className="font-bold">{product.name}</h2>
                <p>KES {product.price}</p>
                <p>Stock: {product.stock}</p>

                <button
                  onClick={() => handleDelete(product.id)}
                  className="mt-3 w-full bg-red-500 text-white py-2 rounded-xl"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

            <div className="bg-white p-6 rounded-xl w-96">

              <h2 className="text-xl font-bold mb-4">
                Add Product
              </h2>

              <input
                placeholder="Name"
                className="w-full border p-2 mb-2"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Price"
                className="w-full border p-2 mb-2"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />

              <input
                placeholder="Stock"
                className="w-full border p-2 mb-2"
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: e.target.value })
                }
              />

              <input
                placeholder="Image URL"
                className="w-full border p-2 mb-4"
                value={form.image}
                onChange={(e) =>
                  setForm({ ...form, image: e.target.value })
                }
              />

              <div className="flex gap-2">

                <button
                  onClick={handleCreate}
                  className="flex-1 bg-green-500 text-white py-2 rounded-xl"
                >
                  Save
                </button>

                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-400 text-white py-2 rounded-xl"
                >
                  Cancel
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