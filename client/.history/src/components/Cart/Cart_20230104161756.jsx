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
      <div className="cart-header">
        <div className="cart-header-logo">
          <img
            src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/306140258_464597212382159_2245929625838983859_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=RtrkM7sGT10AX88BgKu&_nc_ht=scontent.fhan2-1.fna&oh=00_AfBi6TilxVyrOeCFkT99bnKUr3m843CdPEVPrQ-5nVAswg&oe=637A0E63"
            alt=""
          />
          <a href="">NITC</a>
          <h3>Giỏ hàng</h3>
        </div>
        <div className="cart-header-search">
          <input type="text" placeholder="Tìm kiếm..." />
          <SearchIcon sx={{ color: "var(--main-color)" }} />
        </div>
      </div>
      
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