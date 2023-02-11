import React from 'react';
import "./EditAddress.css";
import { Modal, Box, TextField, FormGroup, FormControlLabel, Checkbox, Button, IconButton } from '@mui/material';
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
	const [ newAddress, setNewAddress ] = React.useState(props.value);

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
              
              <div className="group-textfield">
                <TextField 
                  sx={{mb: 2, mr: 2, width: 0.3}}
                  value={newAddress.city}
                  label="Tỉnh/Thành phố"
                  variant="outlined"
                ></TextField>
                <TextField
                  sx={{mb: 2, mr: 2, width: 0.3}}
                  value={newAddress.district}
                  label="Quận/Huyện"
                  variant="outlined"
                ></TextField>
                <TextField
                  sx={{mb: 2, width: 0.3}}
                  value={newAddress.ward}
                  label="Phường/Xã"
                  variant="outlined"
                ></TextField>
              </div>

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
