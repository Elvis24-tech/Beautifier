import { useState } from "react";
import { loginWithGoogleAndBackend } from "../auth/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const result = await loginWithGoogleAndBackend();

      console.log("LOGIN SUCCESS:", result);

      // redirect after login
      navigate("/admin/dashboard");

    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold text-amber-900 mb-6">
          Beautifier Login
        </h1>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold"
        >
          {loading ? "Signing in..." : "Continue with Google"}
        </button>
      </div>
    </div>
  );
}

export default Login;