// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBlwji76tsxrK0YAnCln7buOV7t3jpvGtw",
  authDomain: "convo-cart.firebaseapp.com",
  databaseURL: "https://convo-cart-default-rtdb.firebaseio.com",
  projectId: "convo-cart",
  storageBucket: "convo-cart.appspot.com",
  messagingSenderId: "1063718380931",
  appId: "1:1063718380931:web:eccc1ec0c36e6dbd7482b6",
  measurementId: "G-BH9XVBGWPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
