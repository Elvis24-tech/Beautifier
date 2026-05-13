import Login from "../components/Login";

export default function SellerLoginPage() {
  return (
    <Login
      redirectTo="/admin/dashboard"
      title="Seller Login"
    />
  );
}