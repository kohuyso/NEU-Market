import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import React, { useState } from "react";
import Slider from "react-slick";
import Header from "../Header/Header";
import "./Home.css";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";

import HotDeals from "./HotDeals";
import Discount from "./Discount";
import { selectCart, selectTotalCart } from "../../redux/reducers/cartSlice";
import { useSelector } from "react-redux";

export default function Home() {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const list = useSelector(selectCart);
  const total = useSelector(selectTotalCart);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <Header />
      <div className="home_container">
        <div className="home_top">
          <div className="home_category">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
            >
              <ListItemButton
                onClick={handleClick}
                sx={{
                  backgroundColor: "var(--main-color)",
                  color: "white",
                  "&:hover, &:focus": { backgroundColor: "var(--main-color)" },
                }}
              >
                <ListItemIcon>
                  <DehazeIcon
                    sx={{
                      color: "white",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Danh mục"
                  primaryTypographyProps={{
                    fontWeight: "bold",
                  }}
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AutoStoriesIcon sx={{ color: "var(--main-color)" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Giáo trình"
                      sx={{ color: "var(--main-color)" }}
                    />
                  </ListItemButton>
                  <hr />
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <CheckroomIcon sx={{ color: "var(--main-color)" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Đồng phục"
                      sx={{ color: "var(--main-color)" }}
                    />
                  </ListItemButton>
                  <hr />
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder sx={{ color: "var(--main-color)" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Võ phục"
                      sx={{ color: "var(--main-color)" }}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </div>
          <div className="home_slider">
            <Slider {...settings}>
              <div className="slider_item">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/netflix-71e26.appspot.com/o/Frame%201.png?alt=media&token=378a6502-cc38-4bff-97ca-5bc03ba73aac"
                  alt=""
                />
                <div className="slider_item_inner">
                  <h2>
                    MUA <br />
                    SÁCH ĐI
                  </h2>
                  <p>Giảm ngay 50%</p>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <Button variant="contained">Mua ngay</Button>
                    <Button variant="outlined">Xem chi tiết</Button>
                  </div>
                </div>
              </div>
              <div>
                <h3>2</h3>
              </div>
            </Slider>
          </div>
        </div>

        {list.map((item) => (
          <p>{item.quantity}</p>
        ))}
        <h1>{total}</h1>
        <Discount />
        <HotDeals />
      </div>
      <Footer />
    </div>
  );
}
