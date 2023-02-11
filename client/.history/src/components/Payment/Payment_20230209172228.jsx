import React from 'react';
import "./Payment.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Payment() {
  return (
    <div className='payment-container'>
			<Header/>
			<div className='payment-wrapper'>
				<div className="address-item">
					<div className="address-group">
						<div className="name">Mai Vinh Minh</div>
						<div className="phoneNumber">0934545066</div>
					</div>
					<div className="address-detail">Trường Đại Học Tài Nguyên Môi Trường, Đường Phú Diễn, Phường Phú Diễn, Quận Bắc Từ Liêm, Hà Nội</div>
				</div>
			</div>
			<Footer/>
    </div>
  )
}
