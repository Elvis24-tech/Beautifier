import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await login(email, password);

      setSuccess(true);

      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1200);

    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 via-amber-100 to-stone-100 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-amber-300/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-black/10 blur-[170px] rounded-full"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-[90%] max-w-md bg-white/70 backdrop-blur-xl border border-black/10 shadow-2xl rounded-3xl p-8"
      >
        <h2 className="text-4xl font-black text-black text-center uppercase">
          {success ? "Welcome Back!" : "Welcome Back"}
        </h2>

        <p className="text-center text-sm text-black/60 mt-2">
          {success
            ? "Redirecting you to dashboard..."
            : "Login to continue to your admin dashboard"}
        </p>
        <div className="mt-8 space-y-4">
          <input
            disabled={loading || success}
            placeholder="Email / Username"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-full border bg-white/80 disabled:opacity-50"
          />

          <input
            disabled={loading || success}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-full border bg-white/80 disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={loading || success}
          className={`mt-8 w-full py-3 rounded-full font-bold transition flex items-center justify-center gap-2
            ${
              loading || success
                ? "bg-black/70 cursor-not-allowed"
                : "bg-black hover:scale-105"
            }
            text-amber-100
          `}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-amber-200 border-t-transparent rounded-full animate-spin"></div>
              Please wait...
            </>
          ) : success ? (
            "WELCOME BACK"
          ) : (
            "LOGIN"
          )}
        </button>
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm font-semibold text-black/60 hover:text-black transition"
          >
            ← Back to Home
          </Link>
        </div>

      </form>
    </div>
  );
}