// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD16SkHpCTH4PtOyGDq_Q64aAL2ySdw50A",
    authDomain: "restaurants-app-shuvo.firebaseapp.com",
    projectId: "restaurants-app-shuvo",
    storageBucket: "restaurants-app-shuvo.appspot.com",
    messagingSenderId: "849570856310",
    appId: "1:849570856310:web:a6a2d65f31708236da8e57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app);
