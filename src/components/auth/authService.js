import { auth } from "../../firebase";

import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

export const loginWithGoogleAndBackend = async () => {
  const result = await signInWithPopup(auth, provider);

  const firebaseToken = await result.user.getIdToken();

  const backendData = await exchangeFirebaseToken(firebaseToken);

  localStorage.setItem("access", backendData.access);
  localStorage.setItem("refresh", backendData.refresh);

  return backendData;
};
export const registerUser = async ({
  name,
  email,
  password,
}) => {
  const result = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(result.user, {
    displayName: name,
  });

  const firebaseToken = await result.user.getIdToken();

  const backendData = await exchangeFirebaseToken(firebaseToken);

  localStorage.setItem("access", backendData.access);
  localStorage.setItem("refresh", backendData.refresh);

  return backendData;
};

export const loginUser = async ({
  email,
  password,
}) => {
  const result = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const firebaseToken = await result.user.getIdToken();

  const backendData = await exchangeFirebaseToken(firebaseToken);

  localStorage.setItem("access", backendData.access);
  localStorage.setItem("refresh", backendData.refresh);

  return backendData;
};
export const exchangeFirebaseToken = async (
  firebaseToken
) => {
  const res = await fetch(
    "http://127.0.0.1:8000/api/auth/firebase-login/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: firebaseToken,
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Authentication failed");
  }

  return data;
};

export const logoutUser = async () => {
  await signOut(auth);

  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};