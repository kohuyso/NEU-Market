import { Button } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./Item.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";
import { toast, ToastContainer } from "react-toastify";

const Item = ({ id, img, title, author, rate, price }) => {
  const rateStarFilled = Array.from({ length: rate });
  const numberStarOutlined = Math.ceil(5 - rate);
  const rateStarOutlined = Array.from({ length: numberStarOutlined });

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        author,
        img,
        rate,
        price,
        quantity: 1,
      })
    );
    toast.success("Thêm sản phẩm thành công!");
  };

  return (
    <div className="item">
      <div className="item_img">
        <img src={img} alt="" />
      </div>
      <div className="item_info">
        <p className="item_title">{title}</p>
        <p className="item_author">{author}</p>
        <div className="item_rate">
          {rateStarFilled.map((item) => (
            <StarIcon sx={{ color: "yellow" }} />
          ))}
          {rateStarOutlined.map((item) => (
            <StarBorderIcon sx={{ color: "yellow" }} />
          ))}
        </div>
        <p className="item_price">{price}đ</p>
      </div>
      <div className="item_add">
        <Button variant="outlined" onClick={handleAddToCart}>
          + Thêm vào giỏ hàng
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Item;
