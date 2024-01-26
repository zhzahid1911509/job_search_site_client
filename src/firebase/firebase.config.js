// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvMla9lPwd_aeelVq_6wXRcB18B8gf5No",
  authDomain: "job-portal-auth-a283e.firebaseapp.com",
  projectId: "job-portal-auth-a283e",
  storageBucket: "job-portal-auth-a283e.appspot.com",
  messagingSenderId: "48295157464",
  appId: "1:48295157464:web:4634e0c289d60fe90201ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;