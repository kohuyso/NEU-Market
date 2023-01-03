import React from 'react';
import "./MyDetails.css";

export default function MyDetails() {
  return (
    <div className='my-details-container'>
      <div className='my-details-title'>
        My details
      </div>
      <div className='my-details-content'>
        <div className='my-details-general'>
          <div className='my-details-general-title'>
            General Informations
          </div>
        </div>
        <div className='my-details-info'></div>
        <div className='my-details-info'></div>
      </div>
    </div>
  )
}
