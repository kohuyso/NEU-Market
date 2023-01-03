import React from "react";
import {
  Select,
  MenuItem,
  TextField,
  Button,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import dayjs from "dayjs";
import { AddCircleOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducers/productSlice";
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

  const [newProduct, setNewProduct] = React.useState({ ...product });

  const onChangeFieldName = (event, index) => {
    setNewProduct({
      ...newProduct,
      fields: [
        ...newProduct.fields.slice(0, index - 1),
        {
          name: event.target.value,
          value: ""
        },
        ...newProduct.fields.slice(index)
      ]
    })
  }

  const onChangeFieldValue = () => {
    
  }

  const onAddField = () => {
    setNewProduct({
      ...newProduct,
      fields: [
        ...newProduct.fields,
        {
          name: "",
          value: "",
        },
      ],
    });
  };

  const [value, setValue] = React.useState(0);

  return (
    <div className="add-product-container">
      <div className="add-product-left">
        <div className="add-product-name">
          <TextField
            error={!validateName(newProduct.name) ? true : false}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(event) => {
              setNewProduct({
                ...newProduct,
                name: event.target.value,
              });
            }}
            sx={{ width: 1 }}
            helperText={
              !validateName(newProduct.name) ? "Only letters and spaces" : ""
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
                value={newProduct.type}
                label="Type"
                onChange={(event) => {
                  setNewProduct({
                    ...newProduct,
                    type: event.target.value,
                  });
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
                value={newProduct.gender}
                label="Gender"
                onChange={(event) => {
                  setNewProduct({
                    ...newProduct,
                    gender: event.target.value,
                  });
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

          {/* Handle change field input  */}
          {newProduct.fields.map((field, index) => (
            <FieldInput index={index} onChangeFieldName={onChangeFieldName()}/>
          ))}
        </div>
        <div className="add-product-description">
          <label for="description">Description</label>
          <textarea
            id="description"
            placeholder="Describe your product..."
            rows={6}
            onChange={(event) => {
              setNewProduct({
                ...newProduct,
                description: event.target.value,
              });
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
            {newProduct.imgs.length > 0 && (
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
                  setNewProduct({
                    ...newProduct,
                    size: event.target.value,
                  });
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
                    setNewProduct({
                      ...newProduct,
                      expirationDate: dayjs(newValue).format("DD/MM/YYYY"),
                    });
                  }}
                  renderInput={(params) => (
                    <TextField sx={{ width: 1 }} {...params} />
                  )}
                />
              </LocalizationProvider>
            </div>
            {JSON.stringify(newProduct)}
          </div>
        </div>
        <div className="buttons">
          <Button
            style={{ textTransform: "none" }}
            sx={{ mr: 1.5 }}
            variant="contained"
          >
            Add Product
          </Button>
          <Button
            style={{ textTransform: "none" }}
            sx={{ mr: 1.5 }}
            variant="outlined"
          >
            Save Product
          </Button>
          <Button style={{ textTransform: "none" }} disabled variant="outlined">
            Exit
          </Button>
        </div>
      </div>
    </div>
  );
}
