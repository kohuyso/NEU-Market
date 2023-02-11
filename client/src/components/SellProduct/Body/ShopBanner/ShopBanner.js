import ShopInter from "./shopBanner-inter/ShopBannerInter";
import "./ShopBanner.css";
import { BsShop } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { FiUserCheck, FiStar } from "react-icons/fi";

function ShopBanner() {
  return (
    <div className="wrapper-shop">
      <ShopInter />
      <div className="shop-infor">
        <div className="shop-infor-dt">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1.8rem",
            }}
          >
            <div
              style={{
                marginTop: "0.8px",
                marginRight: "3px",
                fontSize: "16px",
              }}
            >
              <MdDateRange />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {"Ngày đăng ký:"}
              <div style={{ color: "white", marginLeft: "5px" }}>
                15/11/2022
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                marginTop: "0.8px",
                marginRight: "3px",
                fontSize: "16px",
              }}
            >
              <FiStar />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {"Đánh giá:"}
              <div style={{ color: "white", marginLeft: "5px" }}> 4.9 </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1.8rem",
            }}
          >
            <div style={{ marginTop: "0.8px", marginRight: "3px" }}>
              <BsShop />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {"Số sản phẩm đã bán:"}
              <div style={{ color: "white", marginLeft: "5px" }}> 10 </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                marginTop: "0.8px",
                marginRight: "3px",
                fontSize: "16px",
              }}
            >
              <FiUserCheck />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {"Sinh viên:"}
              <div style={{ color: "white", marginLeft: "5px" }}> {"NEU"} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopBanner;
