import React from 'react';
import "./EditAddress.css";
import { Modal, Box, TextField, FormGroup, FormControlLabel, Checkbox, Button, IconButton } from '@mui/material';
import CountryTextField from '../components/countryTextField/CountryTextField';
import { Edit } from '@mui/icons-material';
import axios from 'axios';

const style = {
	position: 'absolute',
	top: '40%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 3
};

export default function EditAddress(props) {
  const [open, setOpen] = React.useState(false);
	const [cities, setCities] = React.useState([]);
  const [city, setCity] = React.useState(props.value.city);
  const [districts, setDistricts] = React.useState([]);
  const [district, setDistrict] = React.useState(props.value.district);
	const [wards, setWards] = React.useState([]);
  const [ward, setWard] = React.useState(props.value.ward);
	const [ newAddress, setNewAddress ] = React.useState(props.value);

	const fetchCities = async () => {
    const { data } = await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
		const cityList = [];
		data.forEach(item => {
			cityList.push(item.Name);
		});
		setCities(cityList);
		setCity(cityList.at(0));
  };

	const fetchDistricts = async (cityName) => {
    const { data } = await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
		const districtList = [];
		const foundCity = data.find((item) => item.Name === cityName);
		foundCity.Districts.forEach(item => {
			districtList.push(item.Name);
		});
		setDistricts(districtList);
		setDistrict(districtList.at(0));
  };

	const fetchWards = async (cityName, districtName) => {
    const { data } = await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
		
		const foundCity = data.find((item) => item.Name === cityName);
		const foundDistrict = foundCity.Districts.find((item) => item.Name === districtName);
    
		const wardList = [];
		foundDistrict.Wards?.forEach(item => {
			wardList.push(item.Name);
		})
		setWards(wardList);
		setWard(wardList.at(0));
	}
	//Fetch when click (Tomorrow)
  React.useEffect(() => {
    fetchCities();
  }, []);
  
  React.useEffect(() => {
    if (city) fetchDistricts(city);
  }, [city]);

  React.useEffect(() => {
    if (district) fetchWards(city, district);
  }, [district, city]);


  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='edit-address'>
      <IconButton onClick={handleOpen}>
        <Edit></Edit>
      </IconButton>
      <Modal
				open={open}
				onClose={handleClose}
			>
				<Box sx={{ ...style, width: 200 }} style={{width: "600px"}}>
            <div className="address-form">
              <div className="title">Địa chỉ mới</div>
              <div className="group-textfield">
                <TextField 
                  sx={{ mb: 2, width: 0.5, mr: 2 }}
                  label="Họ và tên"
                  variant="outlined"
									value={newAddress.name}
                  onChange={(event) => {
                    event.preventDefault();
                    setNewAddress({...newAddress, name: event.target.value})
                  }}
                ></TextField>
                <TextField 
                  sx={{ mb: 2, width: 0.5 }}
									value={newAddress.phoneNumber}
                  label="Số điện thoại"
                  variant="outlined"
                  onChange={(event) => {
                    event.preventDefault();
                    setNewAddress({...newAddress, phoneNumber: event.target.value})
                  }}
                ></TextField>
              </div>
              
              <CountryTextField 
                cities={cities} 
                districts={districts} 
                wards={wards} 
                city={city} 
                district={district} 
                ward={ward}
                newAddress={newAddress}
                setCity={setCity}
                setDistrict={setDistrict}
                setWard={setWard}
                setNewAddress={setNewAddress}
              />

              <TextField 
                sx={{ mb: 2, width: 1 }}
								value={newAddress.detailAddress}
                variant="outlined"
                label="Địa chỉ cụ thể"
                placeholder="Điền số nhà, ngõ, ..."
                multiline={true}
                onChange={(event) => {
                  event.preventDefault();
                  setNewAddress({...newAddress, detailAddress: event.target.value})
                }}
              ></TextField>
              <FormGroup>
                <FormControlLabel 
                  label="Đặt làm địa chỉ mặc định" 
                  control={
                    <Checkbox 
											value={newAddress.default}
                      onChange={(event) => {
                        event.preventDefault();
                        setNewAddress({...newAddress, default: event.target.checked})
                      }}
                    ></Checkbox>
                  }></FormControlLabel>
              </FormGroup>
              <div className="group-buttons">
                <Button 
                  sx={{ mr: 1.5 }}
                  style={{ textTransform: "none" }}
                  variant="contained"
                  onClick={() => {
										console.log(newAddress)
                    handleClose();
                  }}
                >
                  Lưu
                </Button>
                <Button 
                  style={{ textTransform: "none" }}
                  variant="outlined"
                  onClick={handleClose}
                >
                  Thoát
                </Button>
              </div>
            </div>
          </Box>
			</Modal>
    </div>
  )
}
