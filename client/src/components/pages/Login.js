import React from "react";
import Auth from "../../utils/auth";

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
      .then((res) => res.json())
      .then(
        (result) => {
          Auth.login(result.token);
        },
        (error) => {
          console.error(error);
        }
      );
  }
};

const Login = () => {
  return (
    <div className="form-body">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit} className="sign-in">
        <div className="row">
          <label for="email">Email</label>
          <input
            id="signupEmail"
            type="email"
            name="email"
            autocomplete="off"
            placeholder="email@example.com"
          />
        </div>
        <div className="row">
          <label for="password">Password</label>
          <input id="signupPassword" type="password" name="password" />
        </div>
        <button className="sign" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
