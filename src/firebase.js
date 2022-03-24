import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXq5hmMLbDmkiocrNOY64beLbRvUNkc8w",
  authDomain: "rmcpeee.firebaseapp.com",
  databaseURL: "https://rmcpeee-default-rtdb.firebaseio.com",
  projectId: "rmcpeee",
  storageBucket: "rmcpeee.appspot.com",
  messagingSenderId: "1030857200397",
  appId: "1:1030857200397:web:bac921d85d34d4d96c5644",
  measurementId: "G-TPEBNQ5B2H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
