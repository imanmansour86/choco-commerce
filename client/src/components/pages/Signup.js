import React from "react";

const SignUp = () => {
  return (
    <div className="form-body">
      <h1>SignUp</h1>
      <form className="sign-in">
        <div className="row">
          <label for="email">Name</label>
          <input
            type="text"
            name="name"
            autocomplete="off"
            placeholder="Enter name"
          />
        </div>
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

export default SignUp;
