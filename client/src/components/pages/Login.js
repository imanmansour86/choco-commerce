import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState();
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (email && password) {
      fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.ok) return res.json();
          setError("Invalid username or password");
        })
        .then((result) => {
          console.log("result", result);
          Auth.login(result.token, result.user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="form-body">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit} className="sign-in">
        <div className="row">
          <label htmlFor="email">Email</label>
          <input
            id="signupEmail"
            type="email"
            name="email"
            autoComplete="off"
            placeholder="email@example.com"
          />
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <input id="signupPassword" type="password" name="password" />
        </div>
        <button className="sign" type="submit">
          Login
        </button>
        <div>
          <p>
            <Link to={`/signup`}> Don't have an account? Signup here</Link>
          </p>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
