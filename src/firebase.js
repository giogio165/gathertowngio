// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxqUPbT3A2-RnzEU3D1vS__C8TBOPYKd4",
  authDomain: "gathertowngio.firebaseapp.com",
  databaseURL:
    "https://gathertowngio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gathertowngio",
  storageBucket: "gathertowngio.appspot.com",
  messagingSenderId: "492877922248",
  appId: "1:492877922248:web:71c452cbcbd7700d958afd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
