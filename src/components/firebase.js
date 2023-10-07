import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyACjatWLkEeBQc2qEMoeIpMlHECm6VJQVc",
    authDomain: "insider-4260a.firebaseapp.com",
    projectId: "insider-4260a",
    storageBucket: "insider-4260a.appspot.com",
    messagingSenderId: "750048357166",
    appId: "1:750048357166:web:9746bee6b38f8810b768bf"
  }).auth()