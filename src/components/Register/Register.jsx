import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const isValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    
    if (id === "" || id == null) {
      isproceed = false;
      errormessage += 'Username, ';
    }

    if (name === "" || name == null) {
      isproceed = false;
      errormessage += 'Name, ';
    }

    if (surname === "" || surname == null) {
      isproceed = false;
      errormessage += 'Surname, ';
    }

    if (password === "" || password == null) {
      isproceed = false;
      errormessage += 'Password, ';
    }

    if (!isproceed) {
      console.error(errormessage.slice(0, -2)); // Remove the trailing comma and space
      return false;
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        return true;
      } else {
        console.error('Please enter a valid email');
        return false;
      }
    }
  };

  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [surname, surnameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [confirmPassword, confirmPasswordChange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidate()) {
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let regobj = { id, name, surname, email, password, confirmPassword };
    console.log(regobj);

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .then((data) => {
        console.log("Registered successfully:", data);
        alert("Registered successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Error:", err.message);
        alert("Registration failed: " + err.message);
      });
  };

  return (
    <>
      <div className="register-container">
        <h2 className="register-heading">Create an Account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => nameChange(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={surname}
              onChange={(e) => surnameChange(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => emailChange(e.target.value)}
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
              onChange={(e) => passwordChange(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => confirmPasswordChange(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <div className="login-link">
          <p>Already have an Account</p>
          <Link to="/login" className="login-link-button">
            Login here
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
