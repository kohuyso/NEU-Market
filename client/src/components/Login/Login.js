import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      console.log("Hi");
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div>
      <Header />
      <form className="login-form" onSubmit={handleSubmit}>
        <span className="title">Login an account</span>
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

        <button disabled={loading} type="submit">
          Log In
        </button>
        <div className="signup-wrapper">
          Need an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
}
