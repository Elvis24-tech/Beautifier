import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API = "http://127.0.0.1:8000/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // LOAD USER
  // =========================
  const loadUser = async (token) => {
    try {
      const res = await axios.get(`${API}/auth/me/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data);
    } catch (err) {
      console.log("ME ERROR:", err.response?.data);
      logout();
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOGIN
  // =========================
  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API}/auth/login/`, {
        email,
        password,
      });

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      setUser(res.data.user);

      return res.data;
    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data);
      throw err;
    }
  };

  // =========================
  // REGISTER
  // =========================
  const register = async (data) => {
    return await axios.post(`${API}/auth/register/`, data);
  };

  // =========================
  // LOGOUT
  // =========================
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  // =========================
  // INIT
  // =========================
  useEffect(() => {
    const token = localStorage.getItem("access");

    if (token) {
      loadUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};