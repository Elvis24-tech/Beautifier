import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    role: "buyer",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await register(form);

      setSuccess(true);

      setTimeout(() => {
        // redirect based on role
        if (form.role === "seller") {
          navigate("/admin");
        } else {
          navigate("/buyer");
        }
      }, 1200);

    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 via-amber-100 to-stone-100 relative overflow-hidden">

      {/* glow */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-amber-300/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-black/10 blur-[170px] rounded-full"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-[90%] max-w-md bg-white/70 backdrop-blur-xl border border-black/10 shadow-2xl rounded-3xl p-8"
      >

        <h2 className="text-4xl font-black text-black text-center uppercase">
          Create Account
        </h2>

        <p className="text-center text-black/60 mt-2 text-sm">
          Join as Buyer or Seller
        </p>

        {/* ROLE SWITCH */}
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={() => setForm({ ...form, role: "buyer" })}
            className={`flex-1 py-2 rounded-full font-bold transition ${
              form.role === "buyer"
                ? "bg-black text-amber-100"
                : "bg-white border"
            }`}
          >
            Buyer
          </button>

          <button
            type="button"
            onClick={() => setForm({ ...form, role: "seller" })}
            className={`flex-1 py-2 rounded-full font-bold transition ${
              form.role === "seller"
                ? "bg-black text-amber-100"
                : "bg-white border"
            }`}
          >
            Seller
          </button>
        </div>

        {/* FIELDS */}
        <div className="mt-6 space-y-4">
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-5 py-3 rounded-full border bg-white/80"
          />

          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-5 py-3 rounded-full border bg-white/80"
          />

          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-5 py-3 rounded-full border bg-white/80"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading || success}
          className="mt-8 w-full bg-black text-amber-100 py-3 rounded-full font-bold flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-amber-200 border-t-transparent rounded-full animate-spin"></div>
              Creating account...
            </>
          ) : success ? (
            "WELCOME"
          ) : (
            "REGISTER"
          )}
        </button>

      </form>
    </div>
  );
}