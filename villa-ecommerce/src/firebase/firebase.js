// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAciGFPEGDfyoMHltHonYog7Oe_9SXjHSo",
  authDomain: "villa-ecommerce.firebaseapp.com",
  projectId: "villa-ecommerce",
  storageBucket: "villa-ecommerce.appspot.com",
  messagingSenderId: "123351276287",
  appId: "1:123351276287:web:d78dec225d607b6b3b8aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);