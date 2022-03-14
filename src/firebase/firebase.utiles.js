import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAy7dAsSB5RIW2XF2M9TOcFdIfDbGbCY4g",
  authDomain: "crown-db-e8165.firebaseapp.com",
  projectId: "crown-db-e8165",
  storageBucket: "crown-db-e8165.appspot.com",
  messagingSenderId: "353852432505",
  appId: "1:353852432505:web:cc2329410816adb88434a8",
  measurementId: "G-5V7WPZ96TX",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;