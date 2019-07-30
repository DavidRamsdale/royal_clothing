import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBG5TCbBYM9rHmaQ8Dlh9JBfeounfgDlzg",
    authDomain: "royal-db-b9daf.firebaseapp.com",
    databaseURL: "https://royal-db-b9daf.firebaseio.com",
    projectId: "royal-db-b9daf",
    storageBucket: "",
    messagingSenderId: "301460880170",
    appId: "1:301460880170:web:68df0cfe735ce49e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
