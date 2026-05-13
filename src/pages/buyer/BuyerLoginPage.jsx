import Login from "../components/Login";

export default function BuyerLoginPage() {
  return (
    <Login
      redirectTo="/buyer/dashboard"
      title="Buyer Login"
    />
  );
}