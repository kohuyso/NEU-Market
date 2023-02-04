import React from 'react';
import "./EditAddress.css";
import { Modal, Box, TextField, FormGroup, FormControlLabel, Checkbox, Button, IconButton } from '@mui/material';
// import CountryTextField from '../components/countryTextField/CountryTextField';
import { Edit } from '@mui/icons-material';

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
						<div className="title">Sửa địa chỉ</div>
						<div className="group-textfield">
							<TextField 
								sx={{ mb: 2, width: 0.5, mr: 2 }}
								label="Họ và tên"
								variant="outlined"
                value={props.value.name}
							></TextField>
							<TextField 
								sx={{ mb: 2, width: 0.5 }}
								label="Số điện thoại"
								variant="outlined"
                value={props.value.phoneNumber}
							></TextField>
						</div>
						
						{/* <CountryTextField 
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
						/> */}

						<TextField 
							sx={{ mb: 2, width: 1 }}
							variant="outlined"
							label="Địa chỉ cụ thể"
							placeholder="Điền số nhà, ngõ, ..."
              value={props.value.detailAddress}
							multiline={true}
						></TextField>
						<FormGroup>
							<FormControlLabel 
								label="Đặt làm địa chỉ mặc định" 
								control={
									<Checkbox 
                    value={props.value.default}
									></Checkbox>
								}></FormControlLabel>
						</FormGroup>
						<div className="group-buttons">
							<Button 
								sx={{ mr: 1.5 }}
								style={{ textTransform: "none" }}
								variant="contained"
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
