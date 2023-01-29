import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import "./Signup.css";
// import { Route, Switch } from "react-router-dom";
// import SignupDetails from "../SingupDetails/SignupDetails";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <span className="title">Create an account</span>
        <div className="login-wrapper">
          Already have an account? <a href="/login">Log In</a>
        </div>
        {error && <div className="error-msg">{error}</div>}
        <div className="email">
          <TextField
            inputRef={emailRef}
            sx={{ width: 1, mb: 3, backgroundColor: "#F1F5F9" }}
            placeholder="Enter your email"
            label="Email Address"
            type="email"
            variant="outlined"
          />
        </div>
        <div className="password">
          <TextField
            label="Password"
            variant="outlined"
            sx={{ width: 1, mb: 3, backgroundColor: "#F1F5F9" }}
            inputRef={passwordRef}
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="password-confirm">
          <TextField
            label="Password Confirmation"
            variant="outlined"
            sx={{ width: 1, mb: 3, backgroundColor: "#F1F5F9" }}
            inputRef={passwordConfirmRef}
            placeholder="Re-enter your password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <Button
          disabled={loading}
          sx={{ width: 1, mt: 1 }}
          variant="contained"
          style={{
            textTransform: "none",
            fontSize: 15,
            borderRadius: "20px",
          }}
          type="submit"
        >
          Sign Up
        </Button>
      </form>

      {/* <Switch>
        <Route path="/details" component={SignupDetails} />
      </Switch> */}
    </div>
  );
}
