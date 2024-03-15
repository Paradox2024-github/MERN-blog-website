// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-eb7b7.firebaseapp.com",
  projectId: "mern-blog-eb7b7",
  storageBucket: "mern-blog-eb7b7.appspot.com",
  messagingSenderId: "371653276378",
  appId: "1:371653276378:web:6b240dc51d06b9f0772be3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
