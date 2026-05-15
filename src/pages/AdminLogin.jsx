import { useState } from "react";

function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      localStorage.setItem("token", data.access);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.user.is_admin) {
        window.location.href = "/admin";
      } else {
        setError("You are not authorized as admin");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-200 via-amber-100 to-amber-300 flex items-center justify-center relative overflow-hidden">

      {/* GLOW BACKGROUNDS (SAME AS LANDING) */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-400/20 blur-[140px] rounded-full"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-amber-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-amber-300/20 blur-[150px] rounded-full"></div>

      {/* FORM */}
      <form className="relative z-10 w-full max-w-md bg-white/60 backdrop-blur-xl border border-amber-300 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-3xl font-black text-black text-center uppercase">
          Admin Login
        </h1>

        <p className="text-black/70 text-center text-sm mt-2">
          Beautifier Control Panel
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-xl mt-5 text-sm">
            {error}
          </div>
        )}

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full mt-6 px-4 py-3 rounded-xl border border-amber-300 bg-white/70 focus:border-black outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mt-4 px-4 py-3 rounded-xl border border-amber-300 bg-white/70 focus:border-black outline-none"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 bg-black text-amber-200 py-3 rounded-xl font-bold hover:scale-105 transition"
        >
          {loading ? "Logging in..." : "LOGIN"}
        </button>

      </form>
    </div>
  );
}

export default AdminLogin;