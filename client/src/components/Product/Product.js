import React from 'react';
import { Select, MenuItem, TextField, Button, FormControl ,InputLabel } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setType, setGender, addField, setDescription, setSize, setExpirationDate } from '../../redux/reducers/productSlice';
import { validateName } from '../../contexts/helper';
import FieldInput from '../FieldInput/FieldInput';
import { Textarea, FormLabel } from '@mui/joy';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Product() {

  const options = {
    type: [
      "Quần Áo",
      "Giáo Trình",
      "Đồ dùng học tập"
    ],
    gender: [
      "Nam", "Nữ", "Mọi người"
    ],
    size: [
      "S", "M", "L", "XL", "2XL", 34, 35, 36, 37, 38, 39, 40, 41, 42, 43
    ]
  }

  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const onAddField = () => {
    dispatch(addField({
      name: '',
      value: ''
    }))
  }
  
  const [value, setValue] = React.useState(0);

  return (
    <div> 

      <TextField 
        error = { 
          !validateName(product.name) ? true : false 
        }
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        onChange={(event) => {
          dispatch(setName(event.target.value));
        }}
        helperText = {
          !validateName(product.name) ? "Only letters and spaces" : ""
        }
      />
      <FormControl 
        sx={{width: 160}}
      >
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
        {
          options.type.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))
        }
        </Select>
      </FormControl>

      <FormControl 
        sx={{width: 100}}
      >
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
        {
          options.gender.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
      
      {/* <Button 
        variant="contained" 
        startIcon={Add}
      >
        Thêm trường
      </Button> */}
      <Button 
        variant="contained" 
        startIcon={<AddCircleOutline/>}
        style={{textTransform: 'none'}}
        onClick={() => onAddField()}
      >
        Add Field
      </Button>

      {
        product.fields.map((field, index) => (
          <FieldInput index={index}/>
        ))
      }

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea 
          placeholder="Describe your product..." 
          minRows={5} 
          onChange = {(event) => dispatch(setDescription(event.target.value))}
        />
      </FormControl>

      <TextField
        value={product.size}
        select 
        label="Size (Optional)"
        sx={{width: 120}}
        onChange={(event) => {
          dispatch(setSize(event.target.value));
        }}
      >
        {
          options.size.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))
        }
      </TextField>

      

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Expiration Date (Optional)"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            dispatch(setExpirationDate(newValue));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
        
      {
        JSON.stringify(product)
      }
    </div>
  )
}
