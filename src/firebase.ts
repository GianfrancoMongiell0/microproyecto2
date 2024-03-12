// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL9gN5jAfp_U_CJGqh8JpGsFCn9DzmhCA",
  authDomain: "microproyecto2-ad954.firebaseapp.com",
  projectId: "microproyecto2-ad954",
  storageBucket: "microproyecto2-ad954.appspot.com",
  messagingSenderId: "482125054606",
  appId: "1:482125054606:web:df89a79cc9de7da66fbfdf",
  measurementId: "G-80Z296LXJX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);