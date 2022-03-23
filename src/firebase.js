import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAt_E-Ltb52qOFtLa2Eln8cfbTuzI4Cclo",
  authDomain: "testing-e7b82.firebaseapp.com",
  projectId: "testing-e7b82",
  storageBucket: "testing-e7b82.appspot.com",
  messagingSenderId: "550487568332",
  appId: "1:550487568332:web:4b3e8c7699bd01fdc2f769"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
