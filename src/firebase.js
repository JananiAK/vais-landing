// // src/firebase.js
//import { initializeApp } from "firebase/app";
//import { getDatabase } from "firebase/database"; // For Realtime Database
// import { getFirestore } from "firebase/firestore"; // For Firestore

// const firebaseConfig = {
//   apiKey: "AIzaSyBlwji76tsxrK0YAnCln7buOV7t3jpvGtw",
//   authDomain: "convo-cart.firebaseapp.com",
//   databaseURL: "https://convo-cart-default-rtdb.firebaseio.com",
//   projectId: "convo-cart",
//   storageBucket: "convo-cart.appspot.com",
//   messagingSenderId: "1063718380931",
//   appId: "1:1063718380931:web:eccc1ec0c36e6dbd7482b6",
//   measurementId: "G-BH9XVBGWPP",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app); // Realtime Database instance
// const firestore = getFirestore(app); // Firestore instance

// export { database, firestore };
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import Realtime Database
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOwM-AGRX8oTTvp9kVoxBXh8poZYM9OcU",
  authDomain: "vais-bb6ae.firebaseapp.com",
  projectId: "vais-bb6ae",
  storageBucket: "vais-bb6ae.appspot.com",
  messagingSenderId: "368588442794",
  appId: "1:368588442794:web:afe5dcf69f740499fd54d3",
  measurementId: "G-2S9E4SFFMQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Create the database instance

export { database }; // Export the database instance
