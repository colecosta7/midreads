import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTagRSP6vfS6OEQbQ73L_7nA-8q4DBt10",
  authDomain: "midreads.firebaseapp.com",
  projectId: "midreads",
  storageBucket: "midreads.appspot.com",
  messagingSenderId: "633085266973",
  appId: "1:633085266973:web:c5fc51b30d4b40a52b0af4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
