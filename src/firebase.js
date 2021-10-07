import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAIRsRlGnUrRpxYcUUklk76Ej3cUeYhWO0",
  authDomain: "terminal-chat-val8119.firebaseapp.com",
  projectId: "terminal-chat-val8119",
  storageBucket: "terminal-chat-val8119.appspot.com",
  messagingSenderId: "606376017489",
  appId: "1:606376017489:web:2e8d372e5cd2719abb4270",
  measurementId: "G-FMPES68B74",
});

export const auth = firebase.auth();
export const database = firebase.firestore();
