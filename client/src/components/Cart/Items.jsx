import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  toggleItemActive,
} from "../../redux/reducers/cartSlice";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Items = ({ item, handleClick }) => {
  const { author, id, price, img, quantity, rate, title, active } = item;

  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleDelete = () => {
    dispatch(deleteItem({ id }));
  };

  return (
    <div className="carts">
      <div className="check-box">
        <Checkbox {...label} onClick={() => dispatch(toggleItemActive({ id }))} checked={active} />
      </div>
      <div className="image-box">
        <img src={img} alt="" />
        <p>{title}</p>
      </div>
      <div className="info">
        <div>
          <p>{price} đ</p>
        </div>
        <div class="btn-quantity">
          <button class="btn-decrease" onClick={handleDecrease}>
            -
          </button>
          <input type="text" value={quantity} />
          <button class="btn-increase" onClick={handleIncrease}>
            +
          </button>
        </div>
        {/* <div><input type="number" value="1" id="points" name="points" step="1" min="0" /></div> */}
        <div>
          <p>{quantity * price} đ</p>
        </div>
        <div>
          <button onClick={handleDelete}>Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default Items;
