
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyCXsFMKeqMSSucSZVQ6U3A7cFvnvfvWDAc",
  authDomain: "klnyagor-jornadadev.firebaseapp.com",
  projectId: "klnyagor-jornadadev",
  storageBucket: "klnyagor-jornadadev.appspot.com",
  messagingSenderId: "367301047175",
  appId: "1:367301047175:web:81a8f9db890e562b2cd922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;