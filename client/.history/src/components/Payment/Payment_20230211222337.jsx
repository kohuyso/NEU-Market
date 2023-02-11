import React, { useState } from 'react';
import "./Payment.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from 'react-redux';
import LocationOn from '@mui/icons-material/LocationOn';
import Inventory from '@mui/icons-material/Inventory';
import PaymentIcon from '@mui/icons-material/Payment';
import { Button } from '@mui/material';
import { selectCart, deleteItem } from '../../redux/reducers/cartSlice';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function calcTotal(list) {
	let sum = 0;
	list.forEach((item) => {
		sum += (item.price * item.quantity)
	});
	return sum;
}

export default function Payment() {
	const { user } = useSelector((state) => state.user);
	const list = useSelector(selectCart).filter((item) => item.active === true);
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

  return (
    <div className='payment-container'> 
			<Header/>
			<div className='payment-wrapper'>
				<div className="address-item">
					<div className='address-content-title'>
						<LocationOn sx={{mr: 1}}></LocationOn><p>Địa chỉ nhận hàng</p>
					</div>
					<div className="content-item">
						<div className="left-content-item">
							<div className="item-group">
								<div className="name">{user.address[0].name}</div>
								<div className="phoneNumber">{user.address[0].phoneNumber}</div>
							</div>
							<div className="address">{user.address[0].detailAddress}</div>
							<div className="address">{user.address[0].ward}, {user.address[0].district}, {user.address[0].city}</div>
						</div>
						<div className="right-content-item">
							<Button variant='contained' style={{ textTransform: "none", fontSize: 15 }}>Thay đổi</Button>
						</div>
					</div>
				</div>

				<div className='payment-products'>
					<div className='payment-product-title'>
						<Inventory sx={{mr: 1}}></Inventory><p>Sản phẩm</p>
					</div>
					<div className="cart-container">
						<div className="cart-title">
							<div>
								<p>Sản phẩm</p>
							</div>
							<div>
								<p>Đơn giá</p>
							</div>
							<div>
								<p>Số lượng</p>
							</div>
							<div>
								<p>Thành tiền</p>
							</div>
						</div>

						<section>
							{
								list.map((item, index) => (
									<div className="carts" key={index}>
										<div className="image-box" style={{width: "40%", paddingLeft: 50}}>
											<img src={item.img} alt="" />
											<p>{item.title}</p>
										</div>
										<div className="info">
											<div>
												<p>{item.price} đ</p>
											</div>
											<div class="btn-quantity">
												<p>{item.quantity}</p>
											</div>
											<div>
												<p>{item.quantity * item.price} đ</p>
											</div>
										</div>
									</div>
								)) 
							}
						</section>

					</div>
				</div>

				<div className='payment-method'>
					<div className='payment-method-title'>
						<PaymentIcon sx={{mr: 1}}></PaymentIcon><p>Phương thức thanh toán</p>
					</div>
					
					<div className='payment-methods'>
						<Button variant='outlined' sx={{mr: 2}} style={{ textTransform: "none", fontSize: 15 }} onClick={() => { setShow(!show) }}>Thanh toán ngân hàng</Button>
						<Button variant='outlined' style={{ textTransform: "none", fontSize: 15 }} onClick={() => { setShow(!show) }}>Thanh toán khi nhận hàng</Button>
					</div>

					{
						show ? <div className='bill'>
							<div className='fragment'>
								<div className='paragraph'>Tổng tiền hàng:</div>
								<div className='price'>{calcTotal(list)}đ</div> 
							</div>
							<div className='fragment'>
								<div className='paragraph'>Phí vận chuyển:</div>
								<div className='price'>22.000đ</div> 
							</div>
							<div className='fragment'>
								<div className='paragraph'>Tổng thanh toán:</div>
								<div className='final-price'>{calcTotal(list) + 22000}đ</div> 
							</div>
							<Button sx={{mt: 2}} onClick={() => {
								list.forEach((item) => {
									dispatch(deleteItem(item))
									toast.success('🦄 Wow so easy!', {
									position: "top-right",
									autoClose: 5000,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									draggable: true,
									progress: undefined,
									theme: "light",
									});
								})
							}} variant='contained' style={{ textTransform: "none", fontSize: 15 }}><Link to="/">Đặt hàng</Link></Button>
						</div> : ""
					}
					
				</div>
			</div>
			<Footer/>
    </div>
  )
}
