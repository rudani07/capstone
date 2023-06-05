// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsA4EjydHby7iID0n_o1F9u0MrcY7300I",
  authDomain: "e-commerce-website-9c8ab.firebaseapp.com",
  projectId: "e-commerce-website-9c8ab",
  storageBucket: "e-commerce-website-9c8ab.appspot.com",
  messagingSenderId: "899151877732",
  appId: "1:899151877732:web:a36efe666c11916be53171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export const googleAuthProvider = new firebase.auth.googleAuthProvider();
