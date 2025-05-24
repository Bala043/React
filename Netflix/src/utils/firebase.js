// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAboBSekpIf1zIw6pt2QRTMJTJoPwJ55XA",
  authDomain: "netflix-gpt-043.firebaseapp.com",
  projectId: "netflix-gpt-043",
  storageBucket: "netflix-gpt-043.firebasestorage.app",
  messagingSenderId: "1052602356536",
  appId: "1:1052602356536:web:f1020cdf57db59ab44a7cd",
  measurementId: "G-XT2F4YF1D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();