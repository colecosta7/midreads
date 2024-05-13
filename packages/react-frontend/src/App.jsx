import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from "./homepage/home"
import Login from "./login/login"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUsername={setUsername} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
