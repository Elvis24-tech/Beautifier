import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
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

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await axios.post(
        "https://beautifier-backend-iqvq.onrender.com/api/auth/register/",
        formData
      );

      setSuccess(true);

      setTimeout(() => {
        navigate("/admin-login");
      }, 2500);
    } catch (err) {
      console.log(err);

      if (err.response?.data) {
        const errors = Object.values(err.response.data)
          .flat()
          .join(" ");

        setError(errors);
      } else {
        setError("Registration failed. Please try again.");
      }
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
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-amber-100 border border-amber-300 rounded-3xl p-6 sm:p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-black text-black text-center uppercase">
          Create Account
        </h1>

        <p className="text-black/60 text-center text-sm mt-2">
          Join Beautifier Today
        </p>

        {/* ERROR */}
        {error && (
          <div className="bg-amber-300 text-black p-3 rounded-xl mt-5 text-sm font-semibold whitespace-normal break-keep">
            {error}
          </div>
        )}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mt-6 px-4 py-3 rounded-xl bg-amber-50 border border-amber-300 text-black outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-4 px-4 py-3 rounded-xl bg-amber-50 border border-amber-300 text-black outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-4 px-4 py-3 rounded-xl bg-amber-50 border border-amber-300 text-black outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-black text-amber-200 py-3 rounded-xl font-black hover:scale-105 transition disabled:opacity-60"
        >
          {loading ? "CREATING ACCOUNT..." : "REGISTER"}
        </button>

        <div className="flex justify-between items-center mt-5 text-sm">
          <span
            onClick={() => navigate("/admin-login")}
            className="text-black underline cursor-pointer"
          >
            Already have an account?
          </span>

          <span
            onClick={() => navigate("/")}
            className="text-black underline cursor-pointer"
          >
            Back to Home
          </span>
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
                Account Created
              </h2>

              <p className="text-black/60 mt-2 text-sm">
                Redirecting to login page...
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Register;