import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login({ redirectTo = "/buyer/dashboard", title = "Welcome Back" }) {
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
      const user = await login(email, password);

      setSuccess(true);

      setTimeout(() => {
        navigate(redirectTo);
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
          {success ? "Welcome Back!" : title}
        </h2>

        <p className="text-center text-sm text-black/60 mt-2">
          {success ? "Redirecting..." : "Please login to continue"}
        </p>

        <div className="mt-8 space-y-4">
          <input
            disabled={loading || success}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-full border bg-white/80"
          />

          <input
            disabled={loading || success}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-full border bg-white/80"
          />
        </div>

        <button
          type="submit"
          disabled={loading || success}
          className="mt-8 w-full bg-black text-amber-100 py-3 rounded-full font-bold flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-amber-200 border-t-transparent rounded-full animate-spin"></div>
              Please wait...
            </>
          ) : success ? (
            "WELCOME"
          ) : (
            "LOGIN"
          )}
        </button>
      </form>
    </div>
  );
}