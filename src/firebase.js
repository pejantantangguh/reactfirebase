import firebase from 'firebase/app';
import 'firebase/firestore';

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


export default firebase;