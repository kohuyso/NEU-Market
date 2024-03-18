import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({

})

export default app;
export const auth = app.auth()
