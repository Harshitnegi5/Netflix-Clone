import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { 
    addDoc, 
    collection,
     getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB0_vPvZP7yXLHwkoSmD5lZKIJbg3-DlA",
  authDomain: "netflix-clone-cbc70.firebaseapp.com",
  projectId: "netflix-clone-cbc70",
  storageBucket: "netflix-clone-cbc70.appspot.com",
  messagingSenderId: "834543939339",
  appId: "1:834543939339:web:e43bfa9323f3139acbbc0e",
};

const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

const db = getFirestore(app);

const signup = async (email, name, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      Auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(
      collection(db, "user", {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      })
    );
  } catch (error) {
    console.log("Error :", error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(Auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const logout = () => {
  signOut(Auth);
};
export { Auth, db, login, logout, signup };
