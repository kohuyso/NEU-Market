import React from "react";
import "./Header.css";
import { Badge, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <div className="header_logo">
          <Link to={"/"}>
            <img
              src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/306140258_464597212382159_2245929625838983859_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=RtrkM7sGT10AX88BgKu&_nc_ht=scontent.fhan2-1.fna&oh=00_AfBi6TilxVyrOeCFkT99bnKUr3m843CdPEVPrQ-5nVAswg&oe=637A0E63"
              alt=""
            />
            <a href="">NITC</a>
          </Link>
        </div>
        <div className="header_search">
          <input type="text" placeholder="Tìm kiếm..." />
          <Link to="/search">
            <SearchIcon sx={{ color: "var(--main-color)" }} />
          </Link>
        </div>
        <div className="header_option">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon color="action" />
          </Badge>
          <Button variant="outlined">Đăng ký</Button>
          <Button variant="contained">Đăng nhập</Button>
        </div>
      </div>
      <div className="header_bottom">
        <ul className="header_list_option">
          <li className="header_item_option">
            <a href="#">Trang chủ</a>
          </li>
          <li className="header_item_option">
            <a href="#">Sản phấm</a>
          </li>
          <li className="header_item_option">
            <a href="#">Giỏ hàng</a>
          </li>
          <li className="header_item_option">
            <a href="#">Liên hệ</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
