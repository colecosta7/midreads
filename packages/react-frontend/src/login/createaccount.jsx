/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const onCreateClick = () => {
    setErrorMessage(''); // Clear previous error message
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/login"); // Navigate only on successful account creation
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          setErrorMessage('This email is already in use.');
        } else if (errorCode === 'auth/invalid-email') {
          setErrorMessage('The email address is not valid.');
        } else if (errorCode === 'auth/weak-password') {
          setErrorMessage('The password is too weak.');
        } else if (errorCode === 'auth/network-request-failed') {
          setErrorMessage('Network error occurred. Please check your internet connection and try again.');
        } else {
          setErrorMessage(errorMessage);
        }
      });
  };

  return (
    <div>
      <div className="loginlogo">
        <div>join.</div>
      </div>
      <br />
      <div>
        <input
          value={username}
          placeholder="Enter new email here"
          onChange={(ev) => setUsername(ev.target.value)}
          className="inputbox"
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          value={password}
          placeholder="Enter new password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputbox"
        />
      </div>
      <br />
      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}
      <br />
      <div>
        <input 
          className="button"
          type="button" 
          onClick={onCreateClick} 
          value={'create account.'} 
        />
      </div>
    </div>
  );
}

export default CreateAccount;
