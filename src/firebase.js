import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5g1gWpfGjaCeE-MEJaIjisdOcyGnRWcc",
    authDomain: "think-piece-161c8.firebaseapp.com",
    databaseURL: "https://think-piece-161c8.firebaseio.com",
    projectId: "think-piece-161c8",
    storageBucket: "think-piece-161c8.appspot.com",
    messagingSenderId: "547684491658"
};

firebase.initializeApp(config);



export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {auth.signInWithPopup(provider) };

export default firebase;