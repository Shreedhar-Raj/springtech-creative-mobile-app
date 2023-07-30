// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_fy7ftJ1w4usdpeBoolEjOudkaN_FWlM",
  authDomain: "springdales-creative.firebaseapp.com",
  projectId: "springdales-creative",
  storageBucket: "springdales-creative.appspot.com",
  messagingSenderId: "736977265531",
  appId: "1:736977265531:web:66615af0114d066ab9d3de",
  measurementId: "G-G5CZQMB1M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);