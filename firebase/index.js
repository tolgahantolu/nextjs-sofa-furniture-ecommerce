import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { setUserHandler } from "../utils";

const firebaseConfig = {
  apiKey: "AIzaSyCQ2OqUfB6Fre0hOawwsc8zFAePZX8Z5hE",
  authDomain: "sofa-furniture-ecommerce.firebaseapp.com",
  projectId: "sofa-furniture-ecommerce",
  storageBucket: "sofa-furniture-ecommerce.appspot.com",
  messagingSenderId: "297658554450",
  appId: "1:297658554450:web:ec5e14a212e7f098f2678b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    let data = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };
    setUserHandler(data);
  } else {
    setUserHandler(false);
  }
});

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert(error.message);
  }
};
