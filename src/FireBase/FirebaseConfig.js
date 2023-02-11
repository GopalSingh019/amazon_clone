// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB44mOyW6NTdRLlOKSzBkkZKiQUrX83qMc",
  authDomain: "ecomm-4068f.firebaseapp.com",
  projectId: "ecomm-4068f",
  storageBucket: "ecomm-4068f.appspot.com",
  messagingSenderId: "109572002814",
  appId: "1:109572002814:web:347f64fcc0a33258f826af",
  measurementId: "G-B8GPESK0F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);

export {auth,db};