import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAiqPGeffhHmQxR1WGK7s8vhdJaNrcncaQ",
    authDomain: "crwn-db-c2dd7.firebaseapp.com",
    projectId: "crwn-db-c2dd7",
    storageBucket: "crwn-db-c2dd7.appspot.com",
    messagingSenderId: "747734044680",
    appId: "1:747734044680:web:b6f48a4dbf1ad50d5e41bd",
    measurementId: "G-NWDNCDRPJ3"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;