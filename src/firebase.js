import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCGjvVGc64azBFFdfrx0oHwEfrK_gkfjQE",
  authDomain: "twitter-clone-ee744.firebaseapp.com",
  projectId: "twitter-clone-ee744",
  storageBucket: "twitter-clone-ee744.appspot.com",
  messagingSenderId: "290925819806",
  appId: "1:290925819806:web:d1284e92d3138b1a03c88f",
  measurementId: "G-XS7X26LSNP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;