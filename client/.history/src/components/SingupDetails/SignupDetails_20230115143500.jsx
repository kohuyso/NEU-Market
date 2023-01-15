import React from "react";
import "./SignupDetails.css";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
          <TextField
            label="Email address"
            variant="outlined"
          />
        </div>
        <div className="tel">
          <TextField
            sx={{ mb: 2, width: 1 }}
            label="Tel Number"
            variant="outlined"
          />
        </div>
        <div className="dateofbirth">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of Birth"
                  renderInput={(params) => (
                    <TextField sx={{ width: 1 }} {...params} />
                  )}
                />
              </LocalizationProvider>
        </div>
        <div className="gender"></div>
      </form>
    </div>
  );
}
