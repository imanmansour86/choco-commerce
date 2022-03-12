import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

// const [formState, setFormState] = useState({ email: "", password: "" });

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  console.log("signup", name, email, password);
  if (name && email && password) {
    fetch("http://localhost:3001/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result", result.token);
          Auth.login(result.token);
        },
        (error) => {
          console.error(error);
        }
      );
  }
};

const SignUp = () => {
  return (
    <div className="form-body">
      <h1>SignUp</h1>
      <form className="sign-up" onSubmit={handleFormSubmit}>
        <div className="row">
          <label for="email">Name</label>
          <input
            id="signupName"
            type="text"
            name="name"
            autocomplete="off"
            placeholder="Enter name"
          />
        </div>
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
          <input type="password" id="signupPassword" name="password" />
        </div>
        <button className="sign" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
