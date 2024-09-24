// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpKFlPp9ttt34fMC5RTR6TzDneW86QPFw",
  authDomain: "proyecto-expo-a48e4.firebaseapp.com",
  projectId: "proyecto-expo-a48e4",
  storageBucket: "proyecto-expo-a48e4.appspot.com",
  messagingSenderId: "720533317152",
  appId: "1:720533317152:web:268e72af18edff50d57e45",
  measurementId: "G-FWW89EH9WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };