import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from "firebase/app"
import Home from "./homepage/home"
import Login from "./login/login"
import CreateAccount from './login/createaccount';
import './App.css'

const firebaseConfig = {
  apiKey: "AIzaSyCTagRSP6vfS6OEQbQ73L_7nA-8q4DBt10",
  authDomain: "midreads.firebaseapp.com",
  projectId: "midreads",
  storageBucket: "midreads.appspot.com",
  messagingSenderId: "633085266973",
  appId: "1:633085266973:web:c5fc51b30d4b40a52b0af4"

};

export const FIREBASE_APP = initializeApp(firebaseConfig);

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUsername={setUsername} /> } />
          <Route path="/createaccount" element={<CreateAccount loggedIn={loggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
