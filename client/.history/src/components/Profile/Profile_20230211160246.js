import React, { useState } from "react";
import "./Profile.css";
import { Tab, Tabs } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import MyDetails from "../myDetails/MyDetails";
import MyAddress from "../myAddress/MyAddress";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import Carts from "../Cart/Carts";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && <div className="profile-details">{children}</div>}
    </div>
  );
}

export default function Profile() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="profile-main">
      <Header/>
      <div className="profile-container">
        <div className="profile-title">Tài khoản của tôi</div>
        <div className="profile-content">
          <Tabs sx={{width: "18%"}} orientation="vertical" value={value} onChange={handleChange}>
            <Tab
              style={{
                display: "flex",
                flexDirection: "row",
                textTransform: "none",
                justifyContent: "flex-start",
                fontSize: 15,
              }}
              label="Thông tin chi tiết"
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
              label="Địa chỉ của tôi"
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
              label="Giỏ hàng"
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
              label="Cài đặt tài khoản"
              value="4"
            >
            </Tab>
          </Tabs>
          <TabPanel value={value} index={"1"}>
            <MyDetails/>
          </TabPanel>
          <TabPanel value={value} index={"2"}>
            <MyAddress/>
          </TabPanel>
          <TabPanel value={value} index={"3"}>
            <Carts></Carts>
          </TabPanel>
          <TabPanel value={value} index={"4"}>
            Account Settings
          </TabPanel>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
