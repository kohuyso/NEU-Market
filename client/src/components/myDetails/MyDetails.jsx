import React, { useRef, useState } from "react";
import "./MyDetails.css";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { addUser } from "../../redux/reducers/userSlice";
import dayjs from "dayjs";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function MyDetails() {

  const { user } = useSelector((state) => state.user);
  const [ newUser, setNewUser ] = useState(user);
  const dispatch = useDispatch();
  const [day, setDay] = useState(newUser.dateOfBirth);
  const { updatePassword } = useAuth();
  const oldPassRef = useRef();
  const newPassRef = useRef();
  const confirmPassRef = useRef();
  const history = useHistory();

  const changeGeneralInfo = () => {
    dispatch(addUser(newUser));
    updatePassword(newPassRef.current.value).then(() => {
      console.log("Done");
      history.push("/login");
    }).catch((err) => {

    });
  }

  return (
    <div className="my-details-container">
      <div className="my-details-title">Thông tin chi tiết</div>
      <div className="my-details-content">
        <div className="my-details-general">
          <div className="my-details-general-title">Thông tin chung</div>
          <div className="my-details-general-content">
            <div className="left">
              <p>
                Chúng tôi đề xuất bạn cập nhật mật khẩu định kỳ để ngăn chặn truy cập không xác thực vào tài khoản của bạn.
              </p>
            </div>
            <div className="right">
              <TextField
                sx={{ mb: 4, width: 1 }}
                label="Tên đăng nhập"
                variant="outlined"
                value={newUser.username}
                onChange={(event) => {
                  event.preventDefault();
                  setNewUser({
                    ...newUser,
                    username: event.target.value
                  })
                }}
              />
              <p>Thay đổi mật khẩu</p>
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Mật khẩu hiện tại"
                variant="outlined"
                type="text"
                ref={oldPassRef}
              />
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Mật khẩu mới"
                variant="outlined"
                type="text"
                ref={newPassRef}
              />
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Xác nhận mật khẩu mới"
                variant="outlined"
                type="text"
                ref={confirmPassRef}
              />
              <Button
                variant="contained"
                sx={{mt: 2, width: 0.5}}
                style={{ textTransform: "none", fontSize: 15 }}
                onClick={changeGeneralInfo}
              >
                Lưu thay đổi
              </Button>
            </div>
          </div>
        </div>
        <div className="my-details-general">
          <div className="my-details-general-title">Thông tin chi tiết</div>
          <div className="my-details-general-content">
            <div className="left">
              <p>
                Những thông tin này được bảo mật và sẽ không được chia sẻ với người dùng khác. Mời bạn đọc
                {" "}<a href="https://www.facebook.com/">
                   Thông cáo về quyền Riêng tư của NEU Market
                </a>{" "}
                bất cứ khi nào!
              </p>
              <div className="avatar">
                <img
                  src="https://i.pinimg.com/736x/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef--social-networks-avatar.jpg"
                  alt="avatar"
                />
                <Button
                  style={{
                    textTransform: "none",
                    fontSize: 15,
                  }}
                  variant="contained" 
                  component="label"
                >
                  Tải lên
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </div>
            </div>
            <div className="right">
              <div className="group">
                <TextField
                  sx={{ width: 0.5, mr: 2 }}
                  label="Họ"
                  variant="outlined"
                  value={newUser.firstName}
                  onChange={(event) => {
                    event.preventDefault();
                    setNewUser({
                      ...newUser,
                      firstName: event.target.value
                    })
                  }}
                />
                <TextField
                  sx={{ width: 0.5 }}
                  label="Tên"
                  variant="outlined"
                  value={newUser.lastName}
                  onChange={(event) => {
                    event.preventDefault();
                    setNewUser({
                      ...newUser,
                      lastName: event.target.value
                    })
                  }}
                />
              </div>

              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Địa chỉ email"
                variant="outlined"
                value={newUser.email}
                onChange={(event) => {
                  event.preventDefault();
                  setNewUser({
                    ...newUser,
                    email: event.target.value
                  })
                }}
              />
              <TextField
                sx={{ mb: 2, width: 1 }}
                label="Số điện thoại"
                variant="outlined"
                value={newUser.phoneNumber}
                onChange={(event) => {
                  event.preventDefault();
                  setNewUser({
                    ...newUser,
                    phoneNumber: event.target.value
                  })
                }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Ngày sinh"
                  value={day}
                  inputFormat="DD/MM/YYYY"
                  onChange={(newDay) => {
                    setDay(newDay);
                    setNewUser({
                      ...newUser,
                      dateOfBirth: dayjs(newDay).format("DD/MM/YYYY")
                    })
                  }}
                  renderInput={(params) => (
                    <TextField sx={{ width: 1 }} {...params} />
                  )}
                />
              </LocalizationProvider>
              <FormControl sx={{ mt: 1.5, width: 1 }}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Giới tính
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={newUser.gender}
                  onChange={(event) => {
                    event.preventDefault();
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
              <Button
                variant="contained"
                sx={{mt: 2, width: 0.5}}
                style={{ textTransform: "none", fontSize: 15 }}
                onClick={() => {
                  dispatch(addUser(newUser));
                }}
              >
                Xác nhận và lưu
              </Button>
            </div>
          </div>
        </div>
        <div className="my-details-general">
          <div className="my-details-general-title">Kết nối tài khoản</div>
          <div className="my-details-general-content">
            <div className="left">
              <p>
                Nếu kết nối, những tài khoản sau có thể truy cập dữ liệu bạn 
                đã cung cấp cho NEU Market.
              </p>
            </div>
            <div className="right">
              <p>Kết nối</p>
              <div className="connect"></div>
              <div className="connect">
                <div className="group">
                  <Button
                    variant="outlined"
                    sx={{ width: 0.5, mr: 2 }}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textTransform: "none",
                      fontSize: 15,
                    }}
                    startIcon={
                      <div className="icon">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                          alt="google"
                        ></img>
                      </div>
                    }
                  >
                    Google
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textTransform: "none",
                      fontSize: 15,
                    }}
                    sx={{ width: 0.5 }}
                    startIcon={
                      <div className="icon">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                          alt="facebook"
                        ></img>
                      </div>
                    }
                  >
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
