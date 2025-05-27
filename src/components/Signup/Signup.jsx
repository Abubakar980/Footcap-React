// Signup.jsx
import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="main-container">
      <div className="signup_form">
      <h3 className="heading">Create Account</h3>
      <form className="form" action="/create" method="post">
        <input className="input-field" type="text" name="username" placeholder="Username" />
        <input className="input-field" type="email" name="email" placeholder="Email" />
        <input className="input-field" type="password" name="password" placeholder="Password" />
        <input className="input-field" type="number" name="age" placeholder="Age" />
        <input className="submit-button" type="submit" value="Create User" />
      </form>
      </div>
    </div>
  );
};

export default Signup;
