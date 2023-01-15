import React from "react";
import "./SignupDetails.css";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Step,
  Stepper,
  StepLabel
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function SignupDetails() {
  
  const steps = [
    'Account Information',
    'Personal Information'
  ];

  return (
    <React.Fragment>
      <div className="signup-details">
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form className="signup-details-form">
          <span className="title">Personal Information</span>
          <div className="username">
            <TextField sx={{width: 1, mb: 3, mt: 1}} label="Username" variant="outlined" />
          </div>
          <div className="group">
            <TextField sx={{width: 0.5, mb: 3, mr: 2}} label="First name" variant="outlined" />
            <TextField sx={{width: 0.5, mb: 3}} label="Last name" variant="outlined" />
          </div>
          <div className="email">
            <TextField
              sx={{width: 1, mb: 3}}
              label="Email address"
              variant="outlined"
            />
          </div>
          <div className="tel">
            <TextField
              sx={{width: 1, mb: 3}}
              label="Tel Number"
              variant="outlined"
            />
          </div>
          <div className="dateofbirth">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                renderInput={(params) => (
                  <TextField sx={{width: 1, mb: 1}} {...params} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="gender">
            <FormControl sx={{ mt: 1.5, width: 1, mb: 2 }}>
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
          <Button
            sx={{ width: 1, mt: 1 }}
            variant="contained"
            style={{
              textTransform: "none",
              fontSize: 15,
              borderRadius: "20px",
            }}
            type="submit"
          >
            You're all set
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}
