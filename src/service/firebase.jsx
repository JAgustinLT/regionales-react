// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//variable de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "regionalesargentinatuc.firebaseapp.com",
  projectId: "regionalesargentinatuc",
  storageBucket: "regionalesargentinatuc.firebasestorage.app",
  messagingSenderId: "876838819576",
  appId: "1:876838819576:web:c4cb8a868ede3d85bd0d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportar la instancia de firestore

export const db = getFirestore(app)