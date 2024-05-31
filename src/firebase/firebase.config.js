// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4bfIQI8R643BIgas_8vfxS4SKx2_WZq8",
  authDomain: "auth-moha-milon-97c0a.firebaseapp.com",
  projectId: "auth-moha-milon-97c0a",
  storageBucket: "auth-moha-milon-97c0a.appspot.com",
  messagingSenderId: "258901973511",
  appId: "1:258901973511:web:ae6976e8acf04153a828a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;