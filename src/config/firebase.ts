// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB6welAGfTbM7OlTF3oyuKSp30tqiGeqQ",
  authDomain: "nxtlvl-landing.firebaseapp.com",
  projectId: "nxtlvl-landing",
  storageBucket: "nxtlvl-landing.appspot.com",
  messagingSenderId: "233055813231",
  appId: "1:233055813231:web:d225f5b6e887536ea6179a",
  measurementId: "G-34G6W6N580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);