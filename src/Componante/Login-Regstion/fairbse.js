// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp9wVfQya2qAHWzp927x4LagxkzcOgf88",
  authDomain: "toys-e8ccf.firebaseapp.com",
  projectId: "toys-e8ccf",
  storageBucket: "toys-e8ccf.appspot.com",
  messagingSenderId: "121519570752",
  appId: "1:121519570752:web:44cc21b866eb2a4c2e84a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app