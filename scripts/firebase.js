// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbr7PPwW7QES9We7VvW72NDDBL-RA5chs",
  authDomain: "pf-afione.firebaseapp.com",
  projectId: "pf-afione",
  storageBucket: "pf-afione.appspot.com",
  messagingSenderId: "371065823917",
  appId: "1:371065823917:web:8b3230770afdf2a916dc24",
  measurementId: "G-C00D1QKNJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);