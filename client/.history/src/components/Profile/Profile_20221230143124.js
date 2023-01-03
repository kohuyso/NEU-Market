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
              <Tab>My details</Tab>
              <Tab>My address</Tab>
              <Tab>My orders</Tab>
              <Tab>Account settings</Tab>
            </TabList>
          </TabContext>
          
        </div>
        <div className='profile-details'></div>
      </div>
    </div>
  )
}
