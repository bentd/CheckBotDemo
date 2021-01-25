import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD27FMMpEt0QF6J6-enj6upm9etg8_6sjI",
  authDomain: "citi-hbcu.firebaseapp.com",
  projectId: "citi-hbcu",
  storageBucket: "citi-hbcu.appspot.com",
  messagingSenderId: "558865536745",
  appId: "1:558865536745:web:18272077222d6c25138278",
  measurementId: "G-29EZG0XFRC"
};

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

var storageRef = storage.ref();

export default storageRef;