import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("access"));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const setAuthTokens = (data) => {
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    setToken(data.access);
  };

  const logout = async () => {
    await signOut(auth);

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    setFirebaseUser(null);
    setToken(null);
  };
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        token,
        loading,
        isAuthenticated,
        setAuthTokens,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);