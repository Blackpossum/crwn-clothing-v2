import { initializeApp } from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCuzWHXOuwUtUYzXg1AdK4b3Sv390zGDnQ",
    authDomain: "crown-db-9bd88.firebaseapp.com",
    projectId: "crown-db-9bd88",
    storageBucket: "crown-db-9bd88.appspot.com",
    messagingSenderId: "863435150306",
    appId: "1:863435150306:web:5323756e32dec178b41fbb"
  };

const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(firbaseApp);

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
