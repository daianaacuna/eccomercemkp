
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmdFH_zPGHkNzNHOG3SwSJYz5au9gLs_0",
  authDomain: "ecommerce-mkup.firebaseapp.com",
  projectId: "ecommerce-mkup",
  storageBucket: "ecommerce-mkup.firebasestorage.app",
  messagingSenderId: "57379109134",
  appId: "1:57379109134:web:002e3d620cdb66b50bff5f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db