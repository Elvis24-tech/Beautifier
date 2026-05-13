import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(form);
      alert("Account created");
    } catch (err) {
      alert("Registration failed");
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
        <h2 className="text-4xl font-black text-black text-center uppercase tracking-tight">
          Create Account
        </h2>

        <p className="text-center text-black/60 mt-2 text-sm font-medium">
          Join the Beautifier luxury experience
        </p>

        <div className="mt-8 space-y-4">
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-5 py-3 rounded-full border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-300"
          />

          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-5 py-3 rounded-full border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-300"
          />

          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-5 py-3 rounded-full border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-300"
          />
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-black text-amber-100 py-3 rounded-full font-bold tracking-wide shadow-xl hover:scale-105 transition"
        >
          REGISTER
        </button>

        <p className="text-center text-xs text-black/50 mt-6">
          Start your premium beauty journey today
        </p>
      </form>
    </div>
  );
}