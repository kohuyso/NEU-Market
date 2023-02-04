import React from "react";
import "./MyAddress.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Box, TextField, FormControlLabel, Checkbox, FormGroup, IconButton } from "@mui/material";
import { addAddress  } from "../../redux/reducers/userSlice";
import axios from "axios";
import CountryTextField from "../countryTextField/CountryTextField";
import { Delete, Edit } from "@mui/icons-material";

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3
};

export default function MyAddress() {
  const [open, setOpen] = React.useState(false);
  const [ newAddress, setNewAddress ] = React.useState({
    name: '',
    phoneNumber: '',
    city: 'Thành phố Hà Nội',
    district: 'Quận Ba Đình',
    ward: 'Phường Phúc Xá',
    detailAddress: '',
    default: false
  });
  const { user } = useSelector(state => state.user);
  const [cities, setCities] = React.useState([]);
  const [city, setCity] = React.useState('Thành phố Hà Nội');
  const [districts, setDistricts] = React.useState([]);
  const [district, setDistrict] = React.useState('Quận Ba Đình');
	const [wards, setWards] = React.useState([]);
  const [ward, setWard] = React.useState('Phường Phúc Xá');

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

  React.useEffect(() => {
    fetchCities();
  }, []);
  
  React.useEffect(() => {
    if (city) fetchDistricts(city);
  }, [city]);

  React.useEffect(() => {
    if (district) fetchWards(city, district);
  }, [district, city]);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="my-address-container">
      <div className="group">
        <div className="my-address-title">My address</div>
        <Button 
          onClick={handleOpen}
          sx={{height: 0.5, width: 0.2}}
          style={{
            textTransform: "none",
            fontSize: 15
          }}
          variant="contained"
        >
          Thêm địa chỉ mới
        </Button>
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
                  onChange={(event) => {
                    event.preventDefault();
                    setNewAddress({...newAddress, name: event.target.value})
                  }}
                ></TextField>
                <TextField 
                  sx={{ mb: 2, width: 0.5 }}
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
                    dispatch(addAddress(newAddress));
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
      
      <div className="my-address-content">
        <div className="content-title">
            Address Collection 
        </div>
        <div className="content-list">
          {
            user.address.map((value, index) => (
              <div className="content-item" key={index}>
                <div className="left-content-item">
                  <div className="item-group">
                    <div className="name">{value.name}</div>
                    <div className="phoneNumber">{value.phoneNumber}</div>
                  </div>
                  <div className="address">{value.detailAddress}</div>
                  <div className="address">{value.ward}, {value.district}, {value.city}</div>
                </div>
                <div className="right-content-item">
                  <IconButton>
                    <Edit></Edit>
                  </IconButton>
                  <IconButton>
                    <Delete></Delete>
                  </IconButton>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
