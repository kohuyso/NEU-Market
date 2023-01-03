import React, { useState } from "react";
import "./Profile.css";
import { Tab, Tabs } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div className="profile-details">
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default function Profile() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <div className="profile-container">
      <div className="profile-title">My Account</div>
      <div className="profile-content">
        <Tabs orientation="vertical" value={value} onChange={handleChange}>
          <Tab
            style={{
              display: "flex",
              flexDirection: "row",
              textTransform: "none",
              justifyContent: "flex-start",
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
              justifyContent: "flex-start",
              fontSize: 15,
            }}
            icon={<LocationOnIcon sx={{ mr: 1 }} />}
            label="My address"
            value="2"
          >
          </Tab>
          <Tab
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              textTransform: "none",
              fontSize: 15,
            }}
            icon={<AssignmentIcon sx={{ mr: 1 }} />}
            label="My orders"
            value="3"
          >
          </Tab>
          <Tab
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              textTransform: "none",
              fontSize: 15,
            }}
            icon={<SettingsIcon sx={{ mr: 1 }} />}
            label="Account settings"
            value="4"
          >
          </Tab>
        </Tabs>
        <TabPanel value={value} index={"1"}>
          My Details
        </TabPanel>
        <TabPanel value={value} index={"2"}>
          My Address
        </TabPanel>
        <TabPanel value={value} index={"3"}>
          My Orders
        </TabPanel>
        <TabPanel value={value} index={"4"}>
          Account Settings
        </TabPanel>
      </div>
    </div>
  );
}
