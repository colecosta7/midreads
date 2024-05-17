import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./homepage/home"
import Profile from "./profile/profile"
import Login from "./login/login"
import CreateAccount from './login/createaccount';
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUsername={setUsername} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createaccount" element={<CreateAccount loggedIn={loggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
