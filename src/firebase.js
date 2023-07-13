import { initializeApp } from "firebase/app";

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
