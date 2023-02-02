import React, { useEffect } from "react";
import "./SignupDetails.css";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Step,
  Stepper,
  StepLabel
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/reducers/userSlice";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useAuth } from "../../contexts/AuthContext";
import dayjs from "dayjs";

export default function SignupDetails() {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  const [newUser, setNewUser] = React.useState({ 
    uid: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    avatarUrl: '',
    address: [],
  });
  const [day, setDay] = React.useState(0);

  const steps = [
    'Thông tin tài khoản',
    'Thông tin cá nhân',
  ];

  const history = useHistory();

  const onAddUser = () => {
    dispatch(addUser(newUser));
    history.push("/profile");
  }

  useEffect(() => {
    if(currentUser) {
      setNewUser({
        ...newUser,
        uid: currentUser.uid,
        email: currentUser.email
      })
    }
  }, [newUser, currentUser]);

  return (
    <div className="signup-details">
      <Stepper sx={{width: 0.4, mt: 5}} activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        currentUser ? <form className="signup-details-form">
        <span className="title">Thông tin cá nhân</span>
        <div className="username">
          <TextField
            onChange={(event) => {
              setNewUser({
                ...newUser,
                username: event.target.value,
              });
            }} 
            sx={{width: 1, mb: 2, mt: 1}} 
            label="Tên đăng nhập" 
            variant="outlined" 
          />
        </div>
        <div className="group">
          <TextField 
            onChange={(event) => {
              setNewUser({
                ...newUser,
                firstName: event.target.value,
              });
            }} 
            sx={{width: 0.5, mb: 2, mr: 2}} 
            label="Họ" 
            variant="outlined" 
          />
          <TextField 
            onChange={(event) => {
              setNewUser({
                ...newUser,
                lastName: event.target.value,
              });
            }} 
            sx={{width: 0.5, mb: 2}} 
            label="Tên" 
            variant="outlined" 
          />
        </div>
        <div className="tel">
          <TextField 
            onChange={(event) => {
              setNewUser({
                ...newUser,
                phoneNumber: event.target.value,
              });
            }}
            sx={{width: 1, mb: 2}}
            label="Số điện thoại"
            variant="outlined"
          />
        </div>
        <div className="dateofbirth">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
              value={day}
              inputFormat="DD/MM/YYYY"
              onChange={(newDay) => {
                setDay(newDay);
                setNewUser({
                  ...newUser,
                  dateOfBirth: dayjs(newDay).format("YYYY-MM-DD"),
                });
              }}
              label="Ngày sinh"
              renderInput={(params) => (
                <TextField sx={{width: 1, mb: 1}} {...params} />
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="gender">
          <FormControl sx={{ mt: 1.5, width: 1, mb: 2 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Giới tính
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(event) => {
                setNewUser({
                  ...newUser,
                  gender: event.target.value
                })
              }}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Nam"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Nữ"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Khác"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Button
          sx={{ width: 1, mt: 1 }}
          variant="contained"
          style={{
            textTransform: "none",
            fontSize: 15,
            borderRadius: "20px",
          }}
          onClick={() => {
            onAddUser(newUser)
          }}
        >
          Hoàn tất
        </Button>
      </form> : <div className="signup-first">
        <div className="notification">
          Hãy chắc chắn rằng bạn đã tạo tài khoản nhé 
        </div>
        <Button 
          sx={{ width: 1, mt: 2 }}
          variant="contained"
          style={{
            textTransform: "none",
            fontSize: 15,
            borderRadius: "20px",
          }}
          onClick={() => {
            history.push("/signup")
          }}
        >Tạo tài khoản</Button>
      </div> 
      }
    </div>
  );
}
