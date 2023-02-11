import React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Items = ({ item, handleClick }) => {
    const {id, name, price, quantity, total, img} = item;
    return (
        <div className="carts">
            <div className="check-box"><Checkbox {...label} onClick={() => handleClick(item)} /></div>
            <div className="image-box">
                <img src={img} alt="" />
                <p>{name}</p>
            </div>
            <div className="info">
                <div><p>{price} đ</p></div>
                <div class="btn-quantity">
                    <button class="btn-decrease">-</button>
                    <input type="text" value="1" />
                    <button class="btn-increase">+</button>
                </div>
                {/* <div><input type="number" value="1" id="points" name="points" step="1" min="0" /></div> */}
                <div><p>{total} đ</p></div>
                <div><button onClick={() => handleClick(item)}>Xóa</button></div>
            </div>
        </div>
    );
}

export default Items;