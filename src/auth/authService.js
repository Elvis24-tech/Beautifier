import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

/**
 * STEP 1: Firebase Google Login
 */
export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);

  const firebaseUser = result.user;
  const firebaseToken = await firebaseUser.getIdToken();

  return { firebaseUser, firebaseToken };
};

/**
 * STEP 2: Send token to Django backend
 */
export const exchangeFirebaseToken = async (firebaseToken) => {
  const res = await fetch(
    "http://127.0.0.1:8000/api/auth/firebase-login/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: firebaseToken }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Auth failed");
  }

  return data;
};

/**
 * STEP 3: FULL LOGIN FLOW
 */
export const loginWithGoogleAndBackend = async () => {
  const { firebaseUser, firebaseToken } = await loginWithGoogle();

  const backend = await exchangeFirebaseToken(firebaseToken);

  localStorage.setItem("access", backend.access);
  localStorage.setItem("refresh", backend.refresh);

  return { firebaseUser, backend };
};

/**
 * LOGOUT
 */
export const logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  auth.signOut();
};