// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYxV7Qz7uh_-Ekh29ezyOGX-hhY2ba3-U",
  authDomain: "bayond-basics.firebaseapp.com",
  projectId: "bayond-basics",
  storageBucket: "bayond-basics.appspot.com",
  messagingSenderId: "667869699447",
  appId: "1:667869699447:web:b6749c9cc17b331f8d5572"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;