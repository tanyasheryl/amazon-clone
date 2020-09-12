import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3PNc71aE1xk92qw5Ht0qs0Txg2mFhaqk",
  authDomain: "clone-587e7.firebaseapp.com",
  databaseURL: "https://clone-587e7.firebaseio.com",
  projectId: "clone-587e7",
  storageBucket: "clone-587e7.appspot.com",
  messagingSenderId: "906641733456",
  appId: "1:906641733456:web:b660e11b94c0d5034c9e55",
  measurementId: "G-LVL9G42TEW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
