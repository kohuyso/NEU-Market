import React from "react";
import "./Header.css";
import { Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <div className="header_logo">
          <img
            src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/306140258_464597212382159_2245929625838983859_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=RtrkM7sGT10AX88BgKu&_nc_ht=scontent.fhan2-1.fna&oh=00_AfBi6TilxVyrOeCFkT99bnKUr3m843CdPEVPrQ-5nVAswg&oe=637A0E63"
            alt=""
          />
          <a href="/">NITC</a>
        </div>
        <div className="header_search">
          <input type="text" placeholder="Tìm kiếm..." />
          <SearchIcon sx={{ color: "var(--main-color)" }} />
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
            <a href="/">Trang chủ</a>
            <ArrowDropDownIcon />
          </li>
          <li className="header_item_option">
            <a href="/">Sản phấm</a>
            <ArrowDropDownIcon />
          </li>
          <li className="header_item_option">
            <a href="/">Giỏ hàng</a>
            <ArrowDropDownIcon />
          </li>
          <li className="header_item_option">
            <a href="/">Liên hệ</a>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
