import React from "react";
import "./MyDetails.css";
import { IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
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
                This information is private and will not be shared with other
                players. Read the Riot Privacy Notice anytime!
              </p>
              {/* <div className="avatar">
                <img src="https://i.pinimg.com/736x/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef--social-networks-avatar.jpg" alt="avatar"/>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </div> */}
            </div>
            <div className="right">
              <TextField label="Username" variant="outlined" />
              <TextField label="Current Password" variant="outlined" />
              <TextField label="New Password" variant="outlined" />
              <TextField label="Confirm Password " variant="outlined" />
            </div>
          </div>
        </div>
        <div className="my-details-info"></div>
        <div className="my-details-info"></div>
      </div>
    </div>
  );
}
