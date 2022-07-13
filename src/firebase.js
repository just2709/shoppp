// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrzGjVOCa4iGytJaPkCbEDewhVLVQABnQ",
  authDomain: "my-project-69033-337306.firebaseapp.com",
  databaseURL: "https://my-project-69033-337306-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-project-69033-337306",
  storageBucket: "my-project-69033-337306.appspot.com",
  messagingSenderId: "652477155738",
  appId: "1:652477155738:web:a97a99785e95ccd88f9223",
  measurementId: "G-N1KXZYPE2B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
