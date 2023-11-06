// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_WCfda4SOVm06owf9-KiOPtqSlx3Aotc",
  authDomain: "blog-5cd84.firebaseapp.com",
  projectId: "blog-5cd84",
  storageBucket: "blog-5cd84.appspot.com",
  messagingSenderId: "693341874232",
  appId: "1:693341874232:web:7522f8a36c228eab71decd",
  measurementId: "G-CF2NEPMHE1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, "client");
const analytics = getAnalytics(app);
