import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "helloworld-8cc4d.firebaseapp.com",
  projectId: "helloworld-8cc4d",
  storageBucket: "helloworld-8cc4d.appspot.com",
  messagingSenderId: "118765848362",
  appId: "1:118765848362:web:44b13f55c12b7729cd8053"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);