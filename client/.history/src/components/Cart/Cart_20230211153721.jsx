import React from "react";
import "./Cart.css";
import SearchIcon from "@mui/icons-material/Search";
import Carts from "./Carts";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { fontSize } from "@mui/system";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Cart = ({ cart, setCart, handleChange }) => {
  
  return (
    <div className="cart">

      
      <div className="cart-container">
        <div className="cart-title">
          <div><p>Sản phẩm</p></div>
          <div><p>Đơn giá</p></div>
          <div><p>Số lượng</p></div>
          <div><p>Thành tiền</p></div>
          <div><p>Thao tác</p></div>
        </div>
        <Carts />
      </div>
      <div className="cart-footer">
        <div className="cart-btn">
          
          <Checkbox {...label} />
          <p>Chọn tất cả</p>
          <button>Xóa</button>
          
        </div>
        <div className="cart-total">
          <div>
            <p>Tổng thanh toán</p>
            <p>250000 đ</p>
          </div>
          {/* <Stack spacing={2} direction="row">
            <Button className="btn-buy" variant="outlined" size="medium">Mua hàng</Button>
          </Stack> */}
          <button >Mua hàng</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;