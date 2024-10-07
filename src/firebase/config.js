// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1V1D131wYAlAloofzMEOeA-E4u9sWTf4",
  authDomain: "coder-reactjs-fc4d3.firebaseapp.com",
  projectId: "coder-reactjs-fc4d3",
  storageBucket: "coder-reactjs-fc4d3.appspot.com",
  messagingSenderId: "1004105921101",
  appId: "1:1004105921101:web:8e70a0f95a82299e0ba204",
  measurementId: "G-4NTCHJV00Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
