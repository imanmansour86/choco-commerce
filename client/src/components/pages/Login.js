import React from "react";

const Login = () => {
  return (
    <div className="form-body">
      <h1>Login</h1>
      <form className="sign-in">
        <div className="row">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            autocomplete="off"
            placeholder="email@example.com"
          />
        </div>
        <div className="row">
          <label for="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button className="sign" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
