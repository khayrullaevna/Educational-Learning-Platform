import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import "./login.css";

const Login = () => {
  let navigate = useNavigate();
  const [email, emailUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Proceed");

      navigate("/");

      fetch("http://localhost:8000/users/" + email)
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error));
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      alert("Please Enter Your Email");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Please Enter Your Password");
    }
    return result;
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Log in to Your Account</h2>
      <form className="login-form" onSubmit={proceedLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => emailUpdate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => passwordUpdate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="register-link">
        <p>Don't have an account?</p>
        <Link to="/register" className="register-link-button">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;
