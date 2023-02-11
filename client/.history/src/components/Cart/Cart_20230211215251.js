import React from "react";
import "./Cart.css";
import SearchIcon from "@mui/icons-material/Search";
import Carts from "./Carts";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { fontSize } from "@mui/system";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calcTotal, selectCart, selectTotalCart, setAllActive, setAllNotActive } from "../../redux/reducers/cartSlice";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Cart = ({ cart, setCart, handleChange }) => {
  const list = useSelector(selectCart);
  const total = useSelector(selectTotalCart);

  const [active, setActive] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(calcTotal())
  },[list])


 
  return (
    <div className="cart">
      <Header />

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
          <div>
            <p>Thao tác</p>
          </div>
        </div>
        {/* Carts */}
        <Carts list={list} />
      </div>
      <div className="cart-footer">
        <div className="cart-btn">
          <Checkbox {...label} value={active}  onChange={(value)=> {
            if (value.target.value === 'false') {
              dispatch(setAllActive());
            } else {
              dispatch(setAllNotActive());
            }

            setActive(!active)
          }}/>
          <p>Chọn tất cả</p>
          <button>Xóa</button>
        </div>
        <div className="cart-total">
          <div>
            <p>Tổng thanh toán</p>
            <p>{total} đ</p>
          </div>
          {/* <Stack spacing={2} direction="row">
            <Button className="btn-buy" variant="outlined" size="medium">Mua hàng</Button>
          </Stack> */}
          <button>
            {
            total !== 0? <Link to="/payment">Mua hàng</Link> : "Mua Hàng"
            }
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
