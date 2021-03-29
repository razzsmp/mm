import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAm0btAKMAiFnTLUO_YDZDJ7nm6673nJv4",
  authDomain: "jimhnb.firebaseapp.com",
  databaseURL: "https://jimhnb-default-rtdb.firebaseio.com",
  projectId: "jimhnb",
  storageBucket: "jimhnb.appspot.com",
  messagingSenderId: "251597573789",
  appId: "1:251597573789:web:0983db390549d44bb60e74",
  measurementId: "G-JM4CPQNKTZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
