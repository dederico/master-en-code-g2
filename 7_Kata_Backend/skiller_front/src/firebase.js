import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATlNu-NNmo-PHJ-TYlK2gExryRv9mCvH8",
  authDomain: "skiller-20c0e.firebaseapp.com",
  projectId: "skiller-20c0e",
  storageBucket: "skiller-20c0e.appspot.com",
  messagingSenderId: "330790979307",
  appId: "1:330790979307:web:fcf53f6165214f21aea0ae"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  export default database;


