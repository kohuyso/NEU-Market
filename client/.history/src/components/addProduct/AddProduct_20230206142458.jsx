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
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducers/productSlice";
import { validateName } from "../../contexts/helper";
import FieldInput from "../FieldInput/FieldInput";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PhotoCamera } from "@mui/icons-material";
import "./AddProduct.css";
import CustomImageList from "../customImageList/CustomImageList";

export default function AddProduct(props) {
  const options = {
    type: ["Quần Áo", "Giáo Trình", "Đồ dùng học tập"],
    gender: ["Nam", "Nữ", "Mọi người"],
    size: ["S", "M", "L", "XL", "2XL", 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
  };

  const dispatch = useDispatch();

  const onChangeFieldName = (event, index) => {
    props.setNewProduct({
      ...props.newProduct,
      fields: [
        ...props.newProduct.fields.slice(0, index),
        {
          ...props.newProduct.fields[index],
          name: event.target.value,
        },
        ...props.newProduct.fields.slice(index + 1),
      ],
    });
  };

  const onChangeFieldValue = (event, index) => {
    props.setNewProduct({
      ...props.newProduct,
      fields: [
        ...props.newProduct.fields.slice(0, index),
        {
          ...props.newProduct.fields[index],
          value: event.target.value,
        },
        ...props.newProduct.fields.slice(index + 1),
      ],
    });
  };

  const onAddField = () => {
    props.setNewProduct({
      ...props.newProduct,
      fields: [
        ...props.newProduct.fields,
        {
          name: "",
          value: "",
        },
      ],
    });
  };

  const onAddProduct = () => {
    dispatch(addProduct(props.newProduct));
  }

  const [value, setValue] = React.useState(0);

  return (
    <div className="add-product-container">
      <div className="add-product-left">
        <div className="add-product-name">
          <TextField
            error={!validateName(props.newProduct.name) ? true : false}
            id="outlined-basic"
            label="Tên sản phẩm"
            variant="outlined"
            onChange={(event) => {
              props.setNewProduct({
                ...props.newProduct,
                name: event.target.value,
              });
            }}
            sx={{ width: 1 }}
            helperText={
              !validateName(props.newProduct.name) ? "Only letters and spaces" : ""
            }
          />
        </div>
        <div className="add-product-group">
          <div className="add-product-type">
            <FormControl sx={{ width: 1 }}>
              <InputLabel id="demo-simple-select-label">Phân loại</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.newProduct.type}
                label="Type"
                onChange={(event) => {
                  props.setNewProduct({
                    ...props.newProduct,
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
                value={props.newProduct.gender}
                label="Gender"
                onChange={(event) => {
                  props.setNewProduct({
                    ...props.newProduct,
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

          {props.newProduct.fields.map((field, index) => (
            <FieldInput
              index={index}
              onChangeFieldName={onChangeFieldName}
              onChangeFieldValue={onChangeFieldValue}
            />
          ))}
        </div>
        <div className="add-product-price">
          <TextField 
            label="Giá"
            variant="outlined"
            sx={{mb: 3, width: 1}}
          ></TextField>
        </div>
        <div className="add-product-description">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            style={{resize: 'none'}}
            placeholder="Describe your product..."
            rows={6}
            onChange={(event) => {
              props.setNewProduct({
                ...props.newProduct,
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
            {props.newProduct.imgs.length > 0 && (
              <div className="add-product-img-list">
                <CustomImageList />
              </div>
            )}
          </div>
          <div className="add-product-group">
            <div className="add-product-size">
              <TextField
                value={props.newProduct.size}
                select
                label="Size (Optional)"
                sx={{ width: 1 }}
                onChange={(event) => {
                  props.setNewProduct({
                    ...props.newProduct,
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
                    props.setNewProduct({
                      ...props.newProduct,
                      expirationDate: dayjs(newValue).format("DD/MM/YYYY"),
                    });
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
          <Button
            style={{ textTransform: "none" }}
            sx={{ mr: 1.5 }}
            variant="contained"
            onClick={
              onAddProduct
            }
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
