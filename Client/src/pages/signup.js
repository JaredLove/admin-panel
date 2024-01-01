import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signupFormHandler = async (event) => {
    event.preventDefault();

    if (username && email && password) {
      try {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
          // Handle successful signup, for example, redirect to the dashboard
          history.push('/');
        } else {
          // Handle signup error, for example, show an alert
          alert(response.statusText);
        }
      } catch (error) {
        // Handle any other errors that may occur during the fetch
        console.error('Error during signup:', error);
      }
    }
  };

  return (
    <form className="signup-form" onSubmit={signupFormHandler}>
      <div>
        <label htmlFor="username-signup">username:</label>
        <input
          type="text"
          id="username-signup"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email-signup">email:</label>
        <input
          type="text"
          id="email-signup"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password-signup">password:</label>
        <input
          type="password"
          id="password-signup"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">signup</button>
      </div>
    </form>
  );
};

export default SignupForm;