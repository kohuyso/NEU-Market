import React from 'react';
import "./Payment.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux';
import { LocationOn, Inventory } from '@mui/icons-material';
import { Button } from '@mui/material';
import { selectCart } from '../../redux/reducers/cartSlice';

export default function Payment() {
	const { user } = useSelector((state) => state.user);
	const list = useSelector(selectCart);
	
  return (
    <div className='payment-container'> 
			<Header/>
			<div className='payment-wrapper'>
				<div className="address-item">
					<div className='address-content-title'>
						<LocationOn sx={{mr: 1}}></LocationOn><p>Địa chỉ nhận hàng</p>
					</div>
					{/* <div className="content-item">
						<div className="left-content-item">
							<div className="item-group">
								<div className="name">{user.address[0].name}</div>
								<div className="phoneNumber">{user.address[0].phoneNumber}</div>
							</div>
							<div className="address">{user.address[0].detailAddress}</div>
							<div className="address">{user.address[0].ward}, {user.address[0].district}, {user.address[0].city}</div>
						</div>
						<div className="right-content-item">
							<Button variant='outlined'>Thay đổi</Button>
						</div>
					</div> */}
				</div>

				<div className='payment-products'>
					<div className='payment-product-title'>
						<Inventory sx={{mr: 1}}></Inventory><p>Sản phẩm</p>
					</div>
				</div>
			</div>
			<Footer/>
    </div>
  )
}
