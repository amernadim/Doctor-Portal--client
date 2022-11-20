// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgw-prdSALo2vJDH0ZTwBfuW6I2fNsYBA",
  authDomain: "doctor-portal-9b909.firebaseapp.com",
  projectId: "doctor-portal-9b909",
  storageBucket: "doctor-portal-9b909.appspot.com",
  messagingSenderId: "548556341218",
  appId: "1:548556341218:web:fdc54a1bc7f8de4b7043bb",

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  
  // REACT_APP_apiKey = AIzaSyAgw-prdSALo2vJDH0ZTwBfuW6I2fNsYBA
  // REACT_APP_authDomain = doctor-portal-9b909.firebaseapp.com
  // REACT_APP_projectId = doctor-portal-9b909
  // REACT_APP_storageBucket = doctor-portal-9b909.appspot.com
  // REACT_APP_messagingSenderId = 548556341218
  // REACT_APP_appId = 1:548556341218:web:fdc54a1bc7f8de4b7043bb
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
