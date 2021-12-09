import firebase from "firebase";

//authentication
import "firebase/auth";
//firebase db
import "firebase/firestore";
// real time db
import "firebase/database";

// storage

import "firebase/storage";
import "firebase/functions";

//
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1xshfPajvh8cy4e1ZX-cIuHNTvi5PViQ",
  authDomain: "spotify-clone-ed5ce.firebaseapp.com",
  projectId: "spotify-clone-ed5ce",
  storageBucket: "spotify-clone-ed5ce.appspot.com",
  messagingSenderId: "725177509099",
  appId: "1:725177509099:web:031fc0b6d754bda4c40aae",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
