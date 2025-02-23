// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBGVKkH5NthT3CUf_L39cqfg8oUSAe94CY",
  authDomain: "tripmateai-45c3a.firebaseapp.com",
  projectId: "tripmateai-45c3a",
  storageBucket: "tripmateai-45c3a.firebasestorage.app",
  messagingSenderId: "1071123281252",
  appId: "1:1071123281252:web:26a38238710b5292d13671",
  measurementId: "G-PE64FNGDJ5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
