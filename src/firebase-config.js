import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMthANM8KrjWg9hMG0jzcu3gjI1WtN8ek",
  authDomain: "chatappv2-e1a88.firebaseapp.com",
  projectId: "chatappv2-e1a88",
  storageBucket: "chatappv2-e1a88.appspot.com",
  messagingSenderId: "335820239815",
  appId: "1:335820239815:web:8eeb94bebc4989adf99fe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider();
