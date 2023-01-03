import React from "react";
import "./Profile.css";
import { TabContext, TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from '@mui/material/styles';

const CustomTab = styled(Tab)({
  labelIcon: {
    textTransform: "none"
  }
});

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-title">My Account</div>
      <div className="profile-content">
        <TabContext>
          <TabList orientation="vertical">
            <CustomTab
              style={{ display: "flex", flexDirection: "row" }}
              label="My details"
              value="1"
              icon={<PersonIcon sx={{mr: 1}}/>}
            ></CustomTab>
            <CustomTab label="My address" va1lue="2">
              My address
            </CustomTab>
            <CustomTab label="My orders" value="3">
              My orders
            </CustomTab>
            <CustomTab label="Account settings" value="4">
              Account settings
            </CustomTab>
          </TabList>
        </TabContext>
      </div>
    </div>
  );
}
