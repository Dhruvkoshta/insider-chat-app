import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyACjatWLkEeBQc2qEMoeIpMlHECm6VJQVc",
  authDomain: "insider-4260a.firebaseapp.com",
  projectId: "insider-4260a",
  storageBucket: "insider-4260a.appspot.com",
  messagingSenderId: "750048357166",
  appId: "1:750048357166:web:9746bee6b38f8810b768bf"
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()