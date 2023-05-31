import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_APIKEY}`,
  authDomain: `${import.meta.env.VITE_AUTHDOMAIN}`,
  projectId: `${import.meta.env.VITE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_APP_ID}`,
  measurementId: `${import.meta.env.VITE_MEASUREMENT_ID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth();
export default app;
