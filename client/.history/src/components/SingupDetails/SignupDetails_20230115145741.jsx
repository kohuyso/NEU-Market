import React from "react";
import "./SignupDetails.css";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function SignupDetails() {
  return (
    <div className="signup-details">
      <form className="signup-details-form">
        <span className="title">Personal Information</span>
        <div className="username">
          <TextField sx={{width: 1, mb: 3, mt: 1}} label="Username" variant="outlined" />
        </div>
        <div className="group">
          <TextField sx={{width: 0.5, mb: 3, mr: 1}} label="First name" variant="outlined" />
          <TextField sx={{width: 0.5, mb: 3}} label="Last name" variant="outlined" />
        </div>
        <div className="email">
          <TextField
            sx={{width: 1}}
            label="Email address"
            variant="outlined"
          />
        </div>
        <div className="tel">
          <TextField
            sx={{width: 1}}
            label="Tel Number"
            variant="outlined"
          />
        </div>
        <div className="dateofbirth">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              renderInput={(params) => (
                <TextField sx={{width: 1}} {...params} />
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="gender">
          <FormControl sx={{ mt: 1.5, width: 1 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </form>
    </div>
  );
}
