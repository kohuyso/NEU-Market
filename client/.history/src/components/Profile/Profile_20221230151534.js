import React from "react";
import "./Profile.css";
import { Tab, Tabs } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-title">My Account</div>
      <div className="profile-content">
          <Tabs orientation="vertical">
            <Tab
              style={{
                display: "flex",
                flexDirection: "row",
                textTransform: "none",
                alignItems: "flex-start",
                fontSize: 15,
              }}
              label="My details"
              value="1"
              icon={<PersonIcon sx={{ mr: 1 }} />}
            ></Tab>
            <Tab
              style={{
                display: "flex",
                flexDirection: "row",
                textTransform: "none",
                fontSize: 15,
              }}
              icon={<LocationOnIcon sx={{ mr: 1 }} />}
              label="My address"
              va1lue="2"
            >
              My address
            </Tab>
            <Tab
              style={{
                display: "flex",
                flexDirection: "row",
                textTransform: "none",
                fontSize: 15,
              }}
              icon={<AssignmentIcon sx={{ mr: 1 }} />}
              label="My orders"
              value="3"
            >
              My orders
            </Tab>
            <Tab
              style={{
                display: "flex",
                flexDirection: "row",
                textTransform: "none",
                fontSize: 15,
              }}
              icon={<SettingsIcon sx={{ mr: 1 }} />}
              label="Account settings"
              value="4"
            >
              Account settings
            </Tab>
          </Tabs>
      </div>
    </div>
  );
}
