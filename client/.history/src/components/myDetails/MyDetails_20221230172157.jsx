import React from "react";
import "./MyDetails.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export default function MyDetails() {
  return (
    <div className="my-details-container">
      <div className="my-details-title">My details</div>
      <div className="my-details-content">
        <div className="my-details-general">
          <div className="my-details-general-title">General Informations</div>
          <div className="my-details-general-content">
            <div className="left">
              <p>
                We recommend that you periodically update your password to help
                prevent unauthorized access to your account.
              </p>
            </div>
            <div className="right">
              <TextField
                sx={{ mb: 4, width: 1 }}
                label="Username"
                variant="outlined"
              />
              <p>Change Password</p>
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Current Password"
                variant="outlined"
                type="password"
              />
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="New Password"
                variant="outlined"
                type="password"
              />
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Confirm Password "
                variant="outlined"
                type="password"
              />
            </div>
          </div>
        </div>
        <div className="my-details-general">
          <div className="my-details-general-title">Detail Informations</div>
          <div className="my-details-general-content">
            <div className="left">
              <p>
                This information is private and will not be shared with other
                users. Read the{" "}
                <a href="https://www.facebook.com/">
                  NEU Market Privacy Notice
                </a>{" "}
                anytime!
              </p>
              <div className="avatar">
                <img
                  src="https://i.pinimg.com/736x/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef--social-networks-avatar.jpg"
                  alt="avatar"
                />
                <Button variant="contained" component="label">
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </div>
            </div>
            <div className="right">
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Username"
                variant="outlined"
              />
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Username"
                variant="outlined"
              />
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Username"
                variant="outlined"
              />
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Username"
                variant="outlined"
              />
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Username"
                variant="outlined"
              />
            </div>
          </div>
        </div>
        <div className="my-details-info"></div>
      </div>
    </div>
  );
}
