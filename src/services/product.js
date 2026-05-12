import api from "./api";

// GET ALL PRODUCTS
export const getProducts = async () => {
  const res = await api.get("products/");
  return res.data;
};

// CREATE PRODUCT
export const createProduct = async (product) => {
  const res = await api.post("products/", product);
  return res.data;
};

// DELETE PRODUCT
export const deleteProduct = async (id) => {
  const res = await api.delete(`products/${id}/`);
  return res.data;
};