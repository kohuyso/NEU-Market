import React from "react";
import "./Footer.css";
import { Button, Input } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_place">
          <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
          <p>
            <span>Địa điểm phát hành:</span>
            Trường Đại học Kinh tế Quốc dân - 207 Giải Phóng, Đồng Tâm, Hai Bà
            Trưng, Hà Nội, Việt Nam
          </p>
          <p>
            <span>Fanpage:</span>
            facebook.com/
          </p>
          <p>
            <span>CSKH:</span>
            0989 940 5110 (Ms. A)
          </p>
          <p>
            <span>Hotline:</span>
            0398 262 888 (Ms. A)
          </p>
        </div>
        <div className="footer_contact">
          <h3>Góp ý</h3>
          <Input placeholder="Email" />
          <Input placeholder="Thông tin" />
          <Button variant="outlined">Góp ý</Button>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="footer_copyright">@2022 - Bản quyền thuộc về NITC</p>
      </div>
    </footer>
  );
};

export default Footer;
