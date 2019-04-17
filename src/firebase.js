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

export const SignOut = () => {auth.signOut() };

export const createUserProfileDocument = async (user, additionalData) => {
    if(!user) return;

    // Get a user reference to the place in the database where a user profile might be.
    const userRef = firestore.doc(`users/${user.uid}`);

    // Go fetch document from location
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email,photoURL} = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData,
            })
        } catch (error) {
            console.error('Error creating user', error);
        }
    }
    return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
    if(!uid) return null;
    try {
        const userDocument = await firestore.collection('users').doc(uid).get();
        return {uid , ...userDocument.data() };
    } catch (error) {
        console.error('Error catching user document', error);
    }
}

export default firebase;