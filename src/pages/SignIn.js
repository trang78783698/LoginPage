import React from "react";
import { NavLink } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="Sign-form-container">
      <form className="Sign-form">
        <div className="Sign-form-content">
          <h3 className="Sign-form-title">Welcome to E-com</h3>
          <div className="text-center">Sign in to continue</div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Your email"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Your password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
          <p className="text-center mt-3">
            Forgot <a href="#">Password?</a>
          </p>
          <div className="text-center">
            Don’t have an account?
            <NavLink to="/signup">
              <span className="link-primary"> Register</span>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
