import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://beautifier-backend-iqvq.onrender.com/api/token/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.username.trim(),
            password: formData.password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Invalid username or password");
        return;
      }

      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      setSuccess(true);
      setFormData({ username: "", password: "" });

      setTimeout(() => {
        window.location.href = "/admin";
      }, 2500);
    } catch (err) {
      console.log(err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-amber-200 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 py-8">
      <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-amber-300/60 blur-[140px] rounded-full"></div>
      <div className="absolute top-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-amber-400/40 blur-[160px] rounded-full"></div>
      <div className="absolute -bottom-32 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-amber-500/30 blur-[180px] rounded-full"></div>
      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md bg-amber-100 border border-amber-300 rounded-3xl p-6 sm:p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-black text-black text-center uppercase">
          Admin Login
        </h1>

        <p className="text-black/60 text-center text-sm mt-2">
          Beautifier Admin Console
        </p>

        {error && (
          <div className="bg-amber-300 text-black p-3 rounded-xl mt-5 text-sm font-semibold wrap-break-word">
            {error}
          </div>
        )}

        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mt-6 px-4 py-3 rounded-xl bg-amber-50 border border-amber-300 text-black outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-4 px-4 py-3 rounded-xl bg-amber-50 border border-amber-300 text-black outline-none"
        />

        <button
          disabled={loading}
          className="w-full mt-6 bg-black text-amber-200 py-3 rounded-xl font-black hover:scale-105 transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "LOGIN"}
        </button>
        <div className="text-center mt-4 space-y-2">
          <p className="text-black/70 text-sm">
            Don’t have an account?
          </p>

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-black underline font-semibold text-sm hover:text-amber-900"
          >
            Create new account
          </button>

          <div>
            <span
              onClick={() => navigate("/")}
              className="text-black underline cursor-pointer text-sm"
            >
              Back to Home
            </span>
          </div>
        </div>
      </form>
      {success && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-md bg-amber-100 border border-amber-300 rounded-3xl p-8 text-center shadow-2xl overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-amber-300/50 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-amber-400/40 blur-[140px] rounded-full"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 border-4 border-amber-300 border-t-black rounded-full animate-spin"></div>

              <h2 className="text-3xl font-black text-black uppercase">
                Welcome Back
              </h2>

              <p className="text-black/60 mt-2 text-sm">
                Redirecting to admin dashboard...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminLogin;