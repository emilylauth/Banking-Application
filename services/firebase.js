// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLq2aNCX0sofR0wL08AFNUyBm7ujXl8JY",
  authDomain: "bad-bank-capstone.firebaseapp.com",
  databaseURL: "https://bad-bank-capstone-default-rtdb.firebaseio.com",
  projectId: "bad-bank-capstone",
  storageBucket: "bad-bank-capstone.appspot.com",
  messagingSenderId: "169604433034",
  appId: "1:169604433034:web:29e647656b07a05caa9973",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
