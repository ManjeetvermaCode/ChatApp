import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

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
export const auth= getAuth(app)// function is provided by the Firebase Authentication library, and it returns an authentication object that allows you to perform various authentication-related operations.
export const provider = new GoogleAuthProvider();// constructor function is called, which creates an instance of the Google provider for Firebase Authentication.
export const db=getFirestore(app)