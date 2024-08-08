import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJhz6xyTYMHfu8IholxWKL-GibqCKw63E",
    authDomain: "hyderabad-761d9.firebaseapp.com",
    projectId: "hyderabad-761d9",
    storageBucket: "hyderabad-761d9.appspot.com",
    messagingSenderId: "23220133878",
    appId: "1:23220133878:web:943442b5c2956fd0a531d7",
    measurementId: "G-34CG6816ES"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut };
