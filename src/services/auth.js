import api from "./api";
export const loginUser = async (data) => {
  try {
    const res = await api.post("auth/login/", data);
    localStorage.setItem("token", res.data.access);

    return res.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};

export const registerUser = async (data) => {
  try {
    const res = await api.post("auth/register/", data);

    return res.data;
  } catch (error) {
    console.error("Register Error:", error.response?.data || error.message);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await api.get("auth/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.error("Get User Error:", error.response?.data || error.message);
    throw error;
  }
};
export const logoutUser = () => {
  localStorage.removeItem("token");
};