import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import { TextField, InputAdornment, IconButton, Button, Step, Stepper, StepLabel } from "@mui/material";
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
      return setError("Mật khẩu bạn nhập không trùng khớp");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/signup-details");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  const steps = [
    'Thông tin tài khoản',
    'Thông tin cá nhân',
  ];

  return (
    <div className="signup-container">
      <Stepper sx={{width: 0.4, mt: 10}} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form className="signup-form" onSubmit={handleSubmit}>
        <span className="title">Tạo tài khoản</span>
        <div className="login-wrapper">
          Đã có tài khoản? <a href="/login">Đăng nhập</a>
        </div>
        {error && <div className="error-msg">{error}</div>}
        <div className="email">
          <TextField
            inputRef={emailRef}
            sx={{ width: 1, mb: 3, backgroundColor: "#F1F5F9" }}
            placeholder="Nhập email của bạn"
            label="Địa chỉ email"
            type="email"
            variant="outlined"
          />
        </div>
        <div className="password">
          <TextField
            label="Mật khẩu"
            variant="outlined"
            sx={{ width: 1, mb: 3, backgroundColor: "#F1F5F9" }}
            inputRef={passwordRef}
            placeholder="Nhập mật khẩu của bạn"
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
            label="Xác nhận mật khẩu"
            variant="outlined"
            sx={{ width: 1, mb: 3, backgroundColor: "#F1F5F9" }}
            inputRef={passwordConfirmRef}
            placeholder="Nhập lại mật khẩu của bạn"
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
          Đăng ký
        </Button>
      </form>
    </div>
  );
}
