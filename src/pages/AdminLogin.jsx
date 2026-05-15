import { useState } from "react";

function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

    // DEBUG: check what you're sending
    console.log("LOGIN PAYLOAD:", formData);

    try {
      const res = await fetch(
        "https://beautifier-backend-iqvq.onrender.com/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username.trim(),
            password: formData.password,
          }),
        }
      );

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

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
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-amber-200 flex items-center justify-center relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-300/60 rounded-full blur-[120px]"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-amber-400/40 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-amber-500/40 rounded-full blur-[120px]"></div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md bg-amber-100 border border-amber-300 rounded-3xl p-8 shadow-xl"
      >
        <h1 className="text-3xl font-black text-black text-center uppercase">
          Admin Login
        </h1>

        <p className="text-black text-center text-sm mt-2">
          Beautifier Admin Console Access
        </p>

        {error && (
          <div className="bg-amber-300 text-black p-3 rounded-xl mt-5 text-sm font-semibold">
            {error}
          </div>
        )}

        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mt-6 px-4 py-3 rounded-xl bg-amber-50 border border-amber-300 text-black placeholder-black outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-4 px-4 py-3 rounded-xl bg-amber-50 border border-amber-300 text-black placeholder-black outline-none"
        />

        <button
          disabled={loading}
          className="w-full mt-6 bg-amber-300 hover:bg-amber-400 text-black py-3 rounded-xl font-black transition"
        >
          {loading ? "Logging in..." : "LOGIN"}
        </button>

        <div className="text-center mt-4">
          <span
            onClick={() => (window.location.href = "/")}
            className="text-black underline cursor-pointer text-sm font-medium hover:opacity-70"
          >
            Back to Home
          </span>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;