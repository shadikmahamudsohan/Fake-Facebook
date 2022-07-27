// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyS94xuOJ1JbZC7AoJXuowF9CvIrSk8OM",
    authDomain: "fack-facebook.firebaseapp.com",
    projectId: "fack-facebook",
    storageBucket: "fack-facebook.appspot.com",
    messagingSenderId: "1074177497506",
    appId: "1:1074177497506:web:07a7525dfb01832477fafb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;