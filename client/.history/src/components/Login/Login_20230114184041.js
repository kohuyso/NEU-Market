import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <span className="title">Login an account</span>
        <div className="signup-wrapper">
          Need an account? <a href="/signup">Create an account</a>
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
        <div className="group">
          <div>
            <a href="/forgot-password">Forgot Password</a>
          </div>
          <div>
            <Button disabled={loading} style={{ textTransform: "none", fontSize: 15 }} type="submit">
              Log In
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
