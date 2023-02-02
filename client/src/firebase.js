import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAS7F1rSRnwXT7Ymv-TBV8PNClnqo-98xA",
    authDomain: "auth-neu-market.firebaseapp.com",
    projectId: "auth-neu-market",
    storageBucket: "auth-neu-market.appspot.com",
    messagingSenderId: "766666736547",
    appId: "1:766666736547:web:e31acc11be94a942591016"
})

export default app;
export const auth = app.auth()
