import React from "react";
import "./Header.css";
import { Avatar, Badge, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SearchIcon from "@mui/icons-material/Search";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { currentUser } = useAuth();
  const history = useHistory();

  return (
    <header className="header">
      <div className="header_top">
        <Link to={"/"}>
          <div className="header_logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/netflix-71e26.appspot.com/o/306140258_464597212382159_2245929625838983859_n.jpg?alt=media&token=dd87751f-23fb-418f-9d64-24f0e8955213"
              alt=""
            />
            <span>NITC</span>
          </div>
        </Link>
        <div className="header_search">
          <input type="text" placeholder="Tìm kiếm..." />
          <Link to="/search">
            <SearchIcon sx={{ color: "var(--main-color)" }} />
          </Link>
        </div>
        <div className="header_option">
          {!currentUser && (
            <>
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon color="primary" />
              </Badge>
              <Button variant="outlined">Đăng ký</Button>
              <Button variant="contained">Đăng nhập</Button>
            </>
          )}

          <>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon color="primary" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <ChatIcon color="primary" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon color="primary" />
            </Badge>

            <Avatar
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                history.push("/profile");
              }}
              alt="Remy Sharp"
              src="https://firebasestorage.googleapis.com/v0/b/netflix-71e26.appspot.com/o/Ellipse%202.png?alt=media&token=9a360460-df4e-4619-9c6d-ce748bacdee2"
            />
          </>
        </div>
      </div>
      <div className="header_bottom">
        <ul className="header_list_option">
          <li className="header_item_option">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="header_item_option">
            <Link to="/search">Sản phấm</Link>
          </li>
          <li className="header_item_option">
            <Link to="/cart">Giỏ hàng</Link>
          </li>
          <li className="header_item_option">
            <Link to="/">Liên hệ</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
