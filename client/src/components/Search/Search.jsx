import { Box, Button, Pagination, Slider } from "@mui/material";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Item from "../Item/Item";
import "./Search.css";

const minDistance = 100000;

const Search = () => {
  const items = [
    {
      id: 1,
      img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
      title: "Giáo trình Kinh tế học",
      author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
      rate: 4.5,
      price: 100000,
    },
    {
      id: 2,
      img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
      title: "Giáo trình Kinh tế học",
      author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
      rate: 4.5,
      price: 200000,
    },
    {
      id: 3,
      img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
      title: "Giáo trình Kinh tế học",
      author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
      rate: 4.5,
      price: 300000,
    },
    {
      id: 4,
      img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
      title: "Giáo trình Kinh tế học",
      author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
      rate: 4.5,
      price: 400000,
    },
    {
      id: 5,
      img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
      title: "Giáo trình Kinh tế học",
      author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
      rate: 4.5,
      price: 500000,
    },
    {
      id: 6,
      img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
      title: "Giáo trình Kinh tế học",
      author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
      rate: 4.5,
      price: 600000,
    },
  ];

  const [value2, setValue2] = useState([1, 1000000]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <div className="searchpage">
      <Header />
      <div className="searchpage_container">
        <div className="searchpage_left">
          <div className="searchpage_left_category">
            <h3>Danh mục</h3>
            <ul>
              <li>Tất cả</li>
              <li>Giáo trình</li>
              <li>Đồng phục</li>
              <li>Võ phục</li>
            </ul>
          </div>
          <div className="searchpage_left_price">
            <h3>Giá</h3>
            <Slider
              min={1}
              max={1000000}
              getAriaLabel={() => "Minimum distance shift"}
              value={value2}
              onChange={handleChange2}
              valueLabelDisplay="auto"
              disableSwap
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 10%",
              }}
            >
              <p>{value2[0]} đ</p>-<p>{value2[1]} đ</p>
            </div>
          </div>
          <div className="searchpage_left_clear">
            <Button variant="outlined">Xóa bộ lọc</Button>
          </div>
        </div>
        <div className="searchpage_right">
          <div className="searchpage_right_info">
            <p>Gồm 16 kết quả phù hợp</p>
            <Button variant="outlined">Sắp xếp theo</Button>
          </div>
          <div className="searchpage_right_inner">
            {items.map(({ id, img, title, author, rate, price }) => (
              <Item
                key={id}
                img={img}
                title={title}
                author={author}
                rate={rate}
                price={price}
              />
            ))}
            <Pagination count={10} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
