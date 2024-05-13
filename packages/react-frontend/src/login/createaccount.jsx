/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function CreateAccount() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onCreateClick = () => {
      // ADD POST TO DB
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
            value={'Create Account'} />
      </div>
      </div>
  )
}

export default CreateAccount;
