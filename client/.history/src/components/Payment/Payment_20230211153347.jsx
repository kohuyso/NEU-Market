import React from 'react';
import "./Payment.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

export default function Payment() {
  return (
    <div className='payment-container'>
			<Header/>
			<div className='payment-wrapper'>
				<div className="address-item">
					<div className='address-item-title'>
						Địa chỉ nhận hàng
					</div>
					<div className="address-group">
						<div className="name">Mai Vinh Minh</div>
						<div className="phoneNumber">0934545066</div>
					</div>
					<div className="address-detail">Trường Đại Học Tài Nguyên Môi Trường, Đường Phú Diễn, Phường Phú Diễn, Quận Bắc Từ Liêm, Hà Nội</div>
				</div>

				<div className='payment-products'>
					<div className='payment-product-title'>
						Sản phẩm
					</div>
					<div className='payment-product'>
						<Cart></Cart>
					</div>
					<div className='payment-product'></div>
				</div>
			</div>
			<Footer/>
    </div>
  )
}
