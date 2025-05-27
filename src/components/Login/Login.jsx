// Login.jsx
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="main_container">
        <div className="login-container">
      <h3 className="login-title">Login !</h3>
      <form className="login-form" action="/login" method="post">
        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="submit-btn"
          type="submit"
          value="Login"
        />
      </form>
    </div>
    </div>
  );
}

export default Login;
