// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAqaTDO4u-BJ-nVv2GhnrGe1xAAzdysrIE",
  authDomain: "prepwise-8f8bb.firebaseapp.com",
  projectId: "prepwise-8f8bb",
  storageBucket: "prepwise-8f8bb.firebasestorage.app",
  messagingSenderId: "209085652813",
  appId: "1:209085652813:web:fc57447d0737a780d52104",
  measurementId: "G-1FW63Y26TM"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);   
export const db = getFirestore(app);