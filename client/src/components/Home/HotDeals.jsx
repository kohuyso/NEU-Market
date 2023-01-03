import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Item from "../Item/Item";

const HotDeals = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  return (
    <div className="home_hotdeals">
      <div className="home_hotdeals_title">
        <h3>Hot Deals</h3>
        <p>Các sản phẩm của chúng tôi đều được đảm bảo chất lượng</p>
      </div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Giáo trình" value={1} />
        <Tab label="Đồng phục" value={2} />
        <Tab label="Võ phục" value={3} />
      </Tabs>

      <div className="home_hotdeals_book">
        {value === 1 &&
          items.map(({ id, img, title, author, rate, price }) => (
            <Item
              key={id}
              img={img}
              title={title}
              author={author}
              rate={rate}
              price={price}
            />
          ))}
      </div>
      <div className="home_hotdeals_uniform"></div>
      <div className="home_hotdeals_clothes"></div>
    </div>
  );
};

export default HotDeals;
