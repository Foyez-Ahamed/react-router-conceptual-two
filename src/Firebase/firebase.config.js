// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP8caMCL_1797AjKb7A8RD117uPi0nl4w",
  authDomain: "implement-react-firebase.firebaseapp.com",
  projectId: "implement-react-firebase",
  storageBucket: "implement-react-firebase.appspot.com",
  messagingSenderId: "1030315827549",
  appId: "1:1030315827549:web:6205476c8542e13703c8b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

