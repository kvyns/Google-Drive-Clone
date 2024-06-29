import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqDnPa6uqTLNm8KIMmk8gr94Z7dh4SbPc",
  authDomain: "drive-clone-acadf.firebaseapp.com",
  projectId: "drive-clone-acadf",
  storageBucket: "drive-clone-acadf.appspot.com",
  messagingSenderId: "1954943189",
  appId: "1:1954943189:web:7f792300997ec39cce125c"
};

// Initialize Firebase
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);


export { auth, provider, storage, db };