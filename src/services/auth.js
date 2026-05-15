import api from "./api";

export const loginUser = async (data) => {
  const res = await api.post("auth/login/", data);

  localStorage.setItem("token", res.data.access);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data;
};

export const registerUser = async (data) => {
  const res = await api.post("auth/register/", data);
  return res.data;
};

export const getUser = async () => {
  const res = await api.get("auth/me/");
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};