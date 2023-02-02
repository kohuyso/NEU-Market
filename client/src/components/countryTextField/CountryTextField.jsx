import React from 'react';
import "./CountryTextField.css";
import { Box, InputLabel, Select, MenuItem } from '@mui/material';

export default function CountryTextField(props) {
	
  return (
    <div className='countrytextfield-container'>
			<Box sx={{mr: 1.5}}>
				<InputLabel>Tỉnh/Thành phố</InputLabel>
				<Select sx={{width: 175}}
					value={props.city} 
					defaultValue={props.city}  
					onChange={(e) => {
						e.preventDefault();
						props.setCity(e.target.value);
						props.setNewAddress({...props.newAddress, city: e.target.value});
					}}>
					{
						props.cities.map((value, index) => (
							<MenuItem key={index} value={value}>{value}</MenuItem>
						))
					}
				</Select>
			</Box>

			<Box sx={{mr: 1.5}}>
				<InputLabel>Quận/Huyện</InputLabel>
				<Select sx={{width: 175}} 
					value={props.district} 
					defaultValue={props.district}  
					onChange={(e) => {
						e.preventDefault();
						props.setDistrict(e.target.value);
						props.setNewAddress({...props.newAddress, district: e.target.value});
					}}>
					{
						props.districts.map((value, index) => (
							<MenuItem key={index} value={value}>{value}</MenuItem>
						))
					}
				</Select>
			</Box>

			<Box>
				<InputLabel>Xã/Phường</InputLabel>
				<Select sx={{width: 176}} 
					value={props.ward} 
					defaultValue={props.ward} 
					onChange={(e) => {
						e.preventDefault();
						props.setWard(e.target.value);
						props.setNewAddress({...props.newAddress, ward: e.target.value});
					}}>
					{
						props.wards.map((value, index) => (
							<MenuItem key={index} value={value}>{value}</MenuItem>
						))
					}
				</Select>
			</Box>
		</div>
  )
}
