// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHfM1mxT42PuAbcAcj1OKJuXo40ycNols",
  authDomain: "tech-electro-hub.firebaseapp.com",
  projectId: "tech-electro-hub",
  storageBucket: "tech-electro-hub.appspot.com",
  messagingSenderId: "683881265054",
  appId: "1:683881265054:web:c8286f9f293d44f072888f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;