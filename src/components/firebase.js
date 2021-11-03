import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCLyZjRngFic3KzPBLjWXwQdr3JCtBJFJ8",
    authDomain: "clone-d2ba4.firebaseapp.com",
    projectId: "clone-d2ba4",
    storageBucket: "clone-d2ba4.appspot.com",
    messagingSenderId: "396178454455",
    appId: "1:396178454455:web:c37644f744fe76c98d5a32",
    measurementId: "G-CCYXQ7Z7FL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};