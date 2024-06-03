import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

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
const storage = getStorage();

export { app, auth };

//storage
export async function upload(file, currentUser, setLoading){
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  //add to backend

  updateProfile(currentUser, {photoURL});

  setLoading(false);
  alert("Uploaded file!");
}
