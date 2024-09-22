// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBkK8CGVFEhJycjFJd2i2SGgu5Bbmag0I",
  authDomain: "d-art-gallery-86e9e.firebaseapp.com",
  projectId: "d-art-gallery-86e9e",
  storageBucket: "d-art-gallery-86e9e.appspot.com",
  messagingSenderId: "438716755951",
  appId: "1:438716755951:web:71ab92103b4ce4d212101a",
  measurementId: "G-P0BTSJCQTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const googleSignIn = async () => {
  console.log("inside the google login function");
  const provider = new GoogleAuthProvider();
  try {
      const result = await signInWithPopup(auth, provider);
      console.log("searching for user");
      // The signed-in user info.
      const user = result.user;
      console.log('User info:', user);
      alert('Google Sign-In successful!');
  } catch (error) {
      console.log("kuch to error hai");
      alert(error.message);
  }
};

export { auth };