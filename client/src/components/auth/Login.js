import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  // useState allows for an object with multiple values...
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1 className="large text-primary">Login</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign in to your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Need an account? <Link to="/register">Register </Link>
      </p>
    </>
  );
};

export default Login;
