import React from "react";
import "./Profile.css";
import { TabContext, TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from '@mui/material/styles';

// const AntTabs = styled(Ta)({
//   borderBottom: '1px solid #e8e8e8',
//   '& .MuiTabs-indicator': {
//     backgroundColor: '#1890ff',
//   },
// });

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-title">My Account</div>
      <div className="profile-content">
        <TabContext>
          <TabList orientation="vertical" style={{textDecoration: "none"}}>
            <Tab
              style={{ display: "flex", flexDirection: "row", textDecoration: "none" }}
              label="My details"
              value="1"
              icon={<PersonIcon sx={{mr: 1}}/>}
            ></Tab>
            <Tab label="My address" va1lue="2">
              My address
            </Tab>
            <Tab label="My orders" value="3">
              My orders
            </Tab>
            <Tab label="Account settings" value="4">
              Account settings
            </Tab>
          </TabList>
        </TabContext>
      </div>
    </div>
  );
}
