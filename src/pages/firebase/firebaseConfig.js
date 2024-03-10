// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { name, email, password} from "../RegisterPage/RegisterPage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoPADhxd2QGe4wVQhab_WG7kapPav6vqQ",
  authDomain: "microproyecto2-ag.firebaseapp.com",
  projectId: "microproyecto2-ag",
  storageBucket: "microproyecto2-ag.appspot.com",
  messagingSenderId: "60003593014",
  appId: "1:60003593014:web:a272dc6c26a7f5bb8a2197",
  measurementId: "G-W56XNNBPQ4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "users"), {
      nombre: name,
      correo: email,
      contrasena:password 
    });
    console.log("Document written with ID: ", docRef.id);