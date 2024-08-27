import React from "react";
import "./login.css";
import logo from "../../assets/logo.png";

const Login = () => {

  const btnHandler = (e) => {
    e.preventDefault();
     
  }
  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Your name" id="" />
          <input type="email" placeholder="Email" id="" />
          <input type="password" placeholder="Password" id="" />
          <button onClick={btnHandler}>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>need help?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
