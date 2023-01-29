import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import "./Signup.css";
// import { Route, Switch } from "react-router-dom";
// import SignupDetails from "../SingupDetails/SignupDetails";


export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <span className="title">Create an account</span>
        {error && <div className="error-msg">{error}</div>}
        <div className="email">
          <span>Email</span>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="password">
          <span>Password</span>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter your password"
          ></input>
        </div>
        <div className="password-confirm">
          <span>Password Confirmation</span>
          <input
            ref={passwordConfirmRef}
            type="password"
            placeholder="Re-enter your password"
          ></input>
        </div>
        <button disabled={loading} type="submit">
          Sign Up
        </button>
        <div className="login-wrapper">
          Already have an account? <a href="/login">Log In</a>
        </div>
      </form>

      <Switch>
        <Route path="/details" component={SignupDetails} />
      </Switch>
    </div>
  );
}
