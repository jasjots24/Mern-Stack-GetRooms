// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import dotenv from "dotenv";
// dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "getroom-f5522.firebaseapp.com",
  projectId: "getroom-f5522",
  storageBucket: "getroom-f5522.appspot.com",
  messagingSenderId: "91811728649",
  appId: "1:91811728649:web:8b883070bd5cfd2c92d7d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);