import React from "react";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="Sign-form-container">
      <form className="Sign-form">
        <div className="Sign-form-content">
          <h3 className="Sign-form-title">Let’s Get Started</h3>
          <div className="text-center mt-2">Create an new account</div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Full name"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Your mail"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password again"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <div className="text-center mt-3">
            Do have an account?
            <NavLink to="/signin">
              <span className="link-primary"> Sign In</span>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
