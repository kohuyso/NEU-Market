import React from 'react';
import "./Payment.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux';

export default function Payment() {
	const { user } = useSelector((state) => state.user);
  return (
    <div className='payment-container'>
			<Header/>
			<div className='payment-wrapper'>
				<div className="address-item">
					{/* <div className='address-item-title'>
						Địa chỉ nhận hàng
					</div>
					<div className="address-group">
						<div className="name">Mai Vinh Minh</div>
						<div className="phoneNumber">0934545066</div>
					</div>
					<div className="address-detail">Trường Đại Học Tài Nguyên Môi Trường, Đường Phú Diễn, Phường Phú Diễn, Quận Bắc Từ Liêm, Hà Nội</div> */}
					<div className="content-item">
						<div className="left-content-item">
							<div className="item-group">
								<div className="name"></div>
								<div className="phoneNumber">{user.address[0].phoneNumber}</div>
							</div>
							<div className="address">{user.address[0].detailAddress}</div>
							<div className="address">{user.address[0].ward}, {user.address[0].district}, {user.address[0].city}</div>
						</div>
						<div className="right-content-item">
							
						</div>
					</div>
				</div>

				<div className='payment-products'>
					<div className='payment-product-title'>
						Sản phẩm
					</div>
					<div className='payment-product'>
					</div>
					<div className='payment-product'></div>
				</div>
			</div>
			<Footer/>
    </div>
  )
}
