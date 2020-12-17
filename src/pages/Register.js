import React, { useState } from 'react'
import UserModel from '../models/user'

const Register = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsername = e => {
    setUsername(e.target.value)
  }  
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (password === confirmPassword) {
      UserModel.create({ username, email, password })
        .then(data => {
          console.log('Successful register', data)
          // redirect to /login
          props.history.push('/')
        })
    }
  }

  return (
    <div className="center-stage">
      <form className="auth" onSubmit={ handleSubmit }>
      <h2 className="auth-header">Register</h2>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input className="auth-input"
            onChange={ handleUsername } 
            value={ username }
            type="text" 
            id="username" 
            name="username" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input className="auth-input"
            onChange={ handleEmail } 
            value={ email } 
            type="email" 
            id="email" 
            name="email" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input className="auth-input"
            onChange={ handlePassword } 
            value={ password } 
            type="password" 
            id="password" 
            name="password" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input className="auth-input"
            onChange={ handleConfirmPassword } 
            value={ confirmPassword } 
            type="password" 
            id="confirm-password" 
            name="confirm-password" 
            required
          />
        </div>
        <button className="gbl-button" type="submit">Register</button>
      </form>
    </div>
    
  )
}

export default Register;