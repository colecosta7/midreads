/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Ensure the correct import path
import { createUserWithEmailAndPassword } from 'firebase/auth';

function CreateAccount() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onCreateClick = () => {
      createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      navigate("/login")
      }

  return (
      <div>
      <div className="loginlogo">
          <div>join.</div>
      </div>
      <br />
      <div>
          <input
          value={username}
          placeholder="Enter new username here"
          onChange={(ev) => setUsername(ev.target.value)}
          className="inputbox"
          />
      </div>
      <br />
      <div>
          <input
          value={password}
          placeholder="Enter new password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputbox"
          />
      </div>
      <br />
      <div>
          <input 
            className="button"
            type="button" 
            onClick={onCreateClick} 
            value={'create account.'} />
      </div>
      </div>
  )
}

export default CreateAccount;
