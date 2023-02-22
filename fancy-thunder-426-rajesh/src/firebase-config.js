// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnTgwlrgB2xKnc4hk6N7yf6a9Cxn60T18",
  authDomain: "fancy-thunder-426.firebaseapp.com",
  projectId: "fancy-thunder-426",
  storageBucket: "fancy-thunder-426.appspot.com",
  messagingSenderId: "793201338639",
  appId: "1:793201338639:web:6fbf93bcf705c1bc21b67a",
  measurementId: "G-KNJHL9FTS5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
