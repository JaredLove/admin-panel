import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Get the history object from react-router-dom

  const loginFormHandler = async (event) => {
    event.preventDefault();

    if (email && password) {
      try {
        const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
          // Handle successful login, for example, redirect to the dashboard
          history.push('/');
        } else {
          // Handle login error, for example, show an alert
          alert(response.statusText);
        }
      } catch (error) {
        // Handle any other errors that may occur during the fetch
        console.error('Error during login:', error);
      }
    }
  };

  return (
    <form className="login-form" onSubmit={loginFormHandler}>
      <div>
        <label htmlFor="email-login">email:</label>
        <input
          type="text"
          id="email-login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password-login">password:</label>
        <input
          type="password"
          id="password-login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">login</button>
      </div>
    </form>
  );
};

export default LoginForm;
