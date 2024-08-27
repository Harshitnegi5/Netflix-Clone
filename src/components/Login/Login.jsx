import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [signState, SetsignState] = useState("Sign In");

  const btnHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState == "Sign Up" && (
            <input type="text" placeholder="Your name" id="" />
          )}
          <input type="email" placeholder="Email" id="" />
          <input type="password" placeholder="Password" id="" />
          <button onClick={btnHandler}>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState == "Sign In" ? (
            <p>
              New to netflix?{" "}
              <span
                onClick={() => {
                  SetsignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  SetsignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
