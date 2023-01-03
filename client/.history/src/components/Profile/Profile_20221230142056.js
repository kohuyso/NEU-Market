import React from 'react';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-title'>
        My Account
      </div>
      <div className='profile-content'>
        <div className='profile-navigation'>
          <ul>
            <li>My details</li>
            <li>My address</li>
            <li>My orders</li>
            <li>Account settings</li>
          </ul>
        </div>
        <div className='profile-details'></div>
      </div>
    </div>
  )
}
