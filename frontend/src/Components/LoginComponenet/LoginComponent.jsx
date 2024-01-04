import React from "react";
import { Link } from "react-router-dom";
import "./LoginComponent.css";

const LoginComponent = () => {
  return (
    <div className="loginBody">
      <div class="wrapper">
        <div class="form-box login">
          <h2>Login</h2>
          <form action="">
            <div class="input-box">
              <span class="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <input type="email" />
              <label for="">email</label>
            </div>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <input type="password" />
              <label for="">Password</label>
            </div>

            <div class="remember">
              <label for="">
                <input type="checkbox" />I agree to terms and conditions
              </label>
            </div>

            <button type="button" class="btn">
              Login
            </button>

            <div class="login-register">
              <p>
                Don't have an account?{" "}
                <Link to="" class="register-link">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
