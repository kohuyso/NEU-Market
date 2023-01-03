import React, { useCase } from "react";
import {
  Select,
  MenuItem,
  TextField,
  Button,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, setName, setType, setGender, setDescription, setSize, setExpirationDate } from "../../redux/reducers/productSlice";
import { validateName } from "../../contexts/helper";
import FieldInput from "../FieldInput/FieldInput";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PhotoCamera } from "@mui/icons-material";
import "./AddProduct.css";
import CustomImageList from "../customImageList/CustomImageList";

export default function AddProduct() {
  const options = {
    type: ["Quần Áo", "Giáo Trình", "Đồ dùng học tập"],
    gender: ["Nam", "Nữ", "Mọi người"],
    size: ["S", "M", "L", "XL", "2XL", 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
  };

  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useCase({...product}); 

  const onAddField = () => {
    // dispatch(
    //   addField({
    //     name: "",
    //     value: "",
    //   })
    // );
    setNewProduct({...newProduct, fields: newProduct.fields.push({name: "", value: ""})});
  };

  const [value, setValue] = React.useState(0);

  return (
    <div className="add-product-container">
      <div className="add-product-left">
        <div className="add-product-name">
          <TextField
            error={!validateName(product.name) ? true : false}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(event) => {
              dispatch(setName(event.target.value));
            }}
            sx={{ width: 1 }}
            helperText={
              !validateName(product.name) ? "Only letters and spaces" : ""
            }
          />
        </div>
        <div className="add-product-group">
          <div className="add-product-type">
            <FormControl sx={{ width: 1 }}>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={product.type}
                label="Type"
                onChange={(event) => {
                  dispatch(setType(event.target.value));
                }}
              >
                {options.type.map((option) => (
                  <MenuItem value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="add-product-gender">
            <FormControl sx={{ width: 1 }}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={product.gender}
                label="Gender"
                onChange={(event) => {
                  dispatch(setGender(event.target.value));
                }}
              >
                {options.gender.map((option) => (
                  <MenuItem value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="add-product-fields">
          <Button
            variant="contained"
            startIcon={<AddCircleOutline />}
            style={{ textTransform: "none" }}
            onClick={() => onAddField()}
            sx={{ mb: 4 }}
          >
            Add Field
          </Button>

          {product.fields.map((field, index) => (
            <FieldInput index={index} />
          ))}
        </div>
        <div className="add-product-description">
          <label for="description">Description</label>
          <textarea
            id="description"
            placeholder="Describe your product..."
            rows={6}
            onChange={(event) => {
              dispatch(setDescription(event.target.value));
            }}
          ></textarea>
        </div>
      </div>

      <div className="add-product-right">
        <div className="add-product-right-content">
          <div className="add-product-imgs">
            <div className="add-product-imgs-title">
              <div>
                <b>Add your product images</b>
              </div>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ ml: 1 }}
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
            </div>
            {product.imgs.length > 0 && (
              <div className="add-product-img-list">
                <CustomImageList />
              </div>
            )}
          </div>
          <div className="add-product-group">
            <div className="add-product-size">
              <TextField
                value={product.size}
                select
                label="Size (Optional)"
                sx={{ width: 1 }}
                onChange={(event) => {
                  dispatch(setSize(event.target.value));
                }}
              >
                {options.size.map((option) => (
                  <MenuItem value={option}>{option}</MenuItem>
                ))}
              </TextField>
            </div>
            <div className="add-product-expiDate">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Expiration Date (Optional)"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                    dispatch(setExpirationDate(newValue));
                  }}
                  renderInput={(params) => (
                    <TextField sx={{ width: 1 }} {...params} />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <div className="buttons">
          <Button style={{textTransform: 'none'}} sx={{mr: 1.5}} variant="contained">Add Product</Button>
          <Button style={{textTransform: 'none'}} sx={{mr: 1.5}} variant="outlined">Save Product</Button>
          <Button style={{textTransform: 'none'}} disabled variant="outlined">Exit</Button>
        </div>
      </div>
    </div>
  );
}
