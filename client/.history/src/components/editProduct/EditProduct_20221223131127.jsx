import React, { useState } from "react";
import "./EditProduct.css";
import AddProduct from "../addProduct/AddProduct";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function EditProduct() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="edit-product">
      <div className="edtitle-edit">
          <p>Edit your product</p>
        </div>
      </div>
      <div className="edit-product-content">
        <Box sx={{ width: "95%" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="Preview" value="1" />
                <Tab label="Add Product" value="2" />
              </TabList>
            </Box>
            <TabPanel sx={{ padding: 0 }} value="1">
              Preview
            </TabPanel>
            <TabPanel sx={{ padding: 0 }} value="2">
              <AddProduct />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
