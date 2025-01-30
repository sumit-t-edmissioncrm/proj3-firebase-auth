import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: "react-tut-d7159",
  storageBucket: "react-tut-d7159.firebasestorage.app",
  messagingSenderId: "701186981118",
  appId: "1:701186981118:web:367189020e3b04c5bb79af",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
