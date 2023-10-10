// LoginForm.js

import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your login logic here (e.g., sending a request to the server for authentication)
    // For this example, we'll just display the entered username and password in an alert.
    alert(`Username: ${username}, Password:${"*******"} `);
  };

  // Add a function to handle the "Forgot Password?" click
  const handleForgotPasswordClick = () => {
    // You can implement the logic to handle "Forgot Password?" here.
    alert('set new password.');
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='logg'>Log In</button>
        <p>
          <a href="#" onClick={handleForgotPasswordClick}>
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
