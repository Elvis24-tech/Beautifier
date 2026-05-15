import api from "./api";

export const loginUser = async (data) => {
  const res = await api.post("auth/login/", data);
  localStorage.setItem("access", res.data.access);
  localStorage.setItem("refresh", res.data.refresh);
  localStorage.setItem("user", JSON.stringify(res.data.user || {}));

  return res.data;
};

export const registerUser = async (data) => {
  const res = await api.post("auth/register/", data);
  return res.data;
};

export const getUser = async () => {
  const token = localStorage.getItem("access");

  const res = await api.get("auth/me/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("user");

  // ✅ force redirect to buyer landing
  window.location.href = "/buyer";
};