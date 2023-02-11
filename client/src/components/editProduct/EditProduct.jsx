import React, { useState } from "react";
import "./EditProduct.css";
import AddProduct from "../addProduct/AddProduct";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import dayjs from "dayjs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function EditProduct() {
  const [newProduct, setNewProduct] = useState({
    productId: "",
    name: "",
    type: "",
    gender: "",
    fields: [],
    description: "",
    price: 0,
    imgs: [
      'https://thumbs.dreamstime.com/b/beautiful-landscape-dry-tree-branch-sun-flowers-field-against-colorful-evening-dusky-sky-use-as-natural-background-backdrop-48319427.jpg',
      'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      'https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      'https://st.depositphotos.com/1927453/1899/i/450/depositphotos_18999671-stock-photo-old-oak-in-sunset-with.jpg',
      'https://cdn.punchng.com/wp-content/uploads/2022/11/26221240/32UP89U-Mockup.jpg',
  ],
    size: "",
    quantity: 0,
    expirationDate: 0,
    registrationDate: dayjs(new Date().toUTCString()).format("DD/MM/YYYY"),
    rating: 0,
    comments: []
  });
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="edit-product">
      <Header></Header>
      <div className="edit-product-title">
        <div className="title-edit">
          <p>Sản phẩm của bạn</p>
        </div>
      </div>
      <div className="edit-product-content">
        <Box sx={{ width: "95%" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="Xem trước" value="1"/>
                <Tab label="Thêm sản phẩm" value="2"/>
              </TabList>
            </Box>
            <TabPanel sx={{ padding: 0 }} value="1">
              Xem trước
            </TabPanel>
            <TabPanel sx={{ padding: 0 }} value="2">
              <AddProduct newProduct={newProduct} setNewProduct={setNewProduct}/>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      <Footer></Footer>
    </div>
  );
}
