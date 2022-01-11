import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4lRW6eYm6Y43ooGyNBziWrRVtMdFlWEk",
  authDomain: "clone-f58cd.firebaseapp.com",
  databaseURL: "https://clone-f58cd.firebaseio.com",
  projectId: "clone-f58cd",
  storageBucket: "clone-f58cd.appspot.com",
  messagingSenderId: "886000193459",
  appId: "1:886000193459:web:eba4a12fea2267e654c5c6",
  measurementId: "G-8JLB5DV4V9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
