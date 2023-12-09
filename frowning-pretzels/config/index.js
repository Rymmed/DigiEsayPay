// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb9xHtWm0URo-5ifkOK2Yco6XYN56zLUk",
  authDomain: "myproject2-f6ef2.firebaseapp.com",
  projectId: "myproject2-f6ef2",
  storageBucket: "myproject2-f6ef2.appspot.com",
  messagingSenderId: "658921363887",
  appId: "1:658921363887:web:0580b54f057060caad375a",
  measurementId: "G-XTYGDGM0E7"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default firebase;