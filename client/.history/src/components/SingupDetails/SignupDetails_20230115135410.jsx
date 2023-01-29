import React from "react";
import "./SignupDetails.css";
// import TextField
import { TextField } from "@mui/material";

export default function SignupDetails() {
  return (
    <div className="signup-details">
      <form className="signup-details-form">
        <span className="title">Personal Information</span>
        <div className="username">
          <TextField label="Username" variant="outlined" />
        </div>
        <div className="group">
          <TextField label="First name" variant="outlined" />
          <TextField label="Last name" variant="outlined" />
        </div>
        <div className="email">
          
        </div>
        <div className="tel"></div>
        <div className="dateofbirth"></div>
        <div className="gender"></div>
      </form>
    </div>
  );
}
