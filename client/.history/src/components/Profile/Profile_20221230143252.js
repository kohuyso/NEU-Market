import React from 'react';
import "./Profile.css";
import { TabContext, TabList } from '@mui/lab';
import { Tab } from '@mui/material';

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-title'>
        My Account
      </div>
      <div className='profile-content'>
        <div className='profile-navigation'>
          <TabContext>
            <TabList>
              <Tab label="My details" value="1"></Tab>
              <Tab label="My address" value="2">My address</Tab>
              <Tab label="My orders" value="3">My orders</Tab>
              <Tab label="Account settings" value="4">Account settings</Tab>
            </TabList>
          </TabContext>
          
        </div>
        <div className='profile-details'></div>
      </div>
    </div>
  )
}
