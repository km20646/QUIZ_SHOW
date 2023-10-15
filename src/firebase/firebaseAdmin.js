// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiNYUA2fzm0WcRNvV-QEeDJ5q1vyWReWo",
  authDomain: "quiz-show-a7df2.firebaseapp.com",
  projectId: "quiz-show-a7df2",
  storageBucket: "quiz-show-a7df2.appspot.com",
  messagingSenderId: "110438825669",
  appId: "1:110438825669:web:4bb070ea3f6b6d2363faac",
  measurementId: "G-1532210ZS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);