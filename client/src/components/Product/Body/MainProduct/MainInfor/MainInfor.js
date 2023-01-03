import { Counter } from "../../../counter/Counter";
import "./MainInfor.css";
import Rating from "@mui/material/Rating";

let ProductInfor = {
  name: "Sản phẩm Solidity - Chính hãng",
  price: "100.000.000",
  address: "207 Đồng Tâm, Giải Phóng, Hai Bà Trưng, Hà Nội",
  shopInfor: {
    shopName: "Chi_Nhung_shop",
    date: "10/12/2022",
    starRate: 4.8,
    productSell: 5,
    studentKind: "NEU",
  },
  detailInfor: {
    kind: "sss",
    subject: "sss",
    pageNumber: 300,
    dateRelease: "sss",
    publisher: "NHD",
  },
  productDescription: [
    "Ai mang theo gió đêm qua chút hương thơm cỏ dại",
    "Ai lay cho đám mân côi đong đưa ngoài hiên",
    "Ai thêm con nắng trong veo nhắc sen hồng nở muộn",
    "Ai mang hoa đên cho em..em chờ",
  ],
};

function MainInfor() {
  return (
    <div className="wrapper-MainProduct-MainInfor">
      <div style={{ marginLeft: "1rem" }}>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "30px",
          }}
          className="MainInfor-setText"
        >
          {ProductInfor.name}
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <Rating
            name="half-rating-read"
            defaultValue={ProductInfor.shopInfor.starRate}
            precision={0.2}
            readOnly
          />
        </div>

        <div
          style={{
            fontWeight: "500",
            fontSize: "36px",
          }}
          className="MainInfor-setText"
        >
          ₫{ProductInfor.price}
        </div>
        <div style={{ marginBottom: "4rem" }}>
          <Counter></Counter>
        </div>
        <div>
          <button className="button-MainProduct-MainInfor">
            Thêm vào giỏ hàng
          </button>
          <button
            className="button-MainProduct-MainInfor"
            style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
          >
            Mua ngay
          </button>
        </div>
        <div style={{ fontWeight: "400", fontSize: "18px", color: "white" }}>
          Địa chỉ: {ProductInfor.address}
        </div>
      </div>
    </div>
  );
}

export default MainInfor;
