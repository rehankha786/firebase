import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCn6DTmqa6xfke_konLdeKQUlMH0Fc8VMw",
  authDomain: "addbook-b736f.firebaseapp.com",
  projectId: "addbook-b736f",
  storageBucket: "addbook-b736f.appspot.com",
  messagingSenderId: "1047564474959",
  appId: "1:1047564474959:web:124c609210e6834a91683a",
  measurementId: "G-C184ZVN2VX",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
