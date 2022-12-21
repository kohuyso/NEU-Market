import Image from "../../../assets/images/Image";
import "./shop-inter.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";

const image = {
  src: "https://quangvinh.thuathienhue.gov.vn/UploadFiles/TinTuc/2020/2/12/tai_xuong.png",
  alt: "Chi_Nhung_Shop",
};

function ShopInter() {
  return (
    <div className="wrapper-shop-inter">
      <Image
        src={image.src}
        alt={image.alt}
        className="shop-image"
        onClick={{}}
      />

      <div
        style={{
          marginLeft: "1.8rem",
          marginTop: "0.5rem",
          textAlign: "left",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            marginBottom: "0.6rem",
            marginLeft: "0.2rem",
          }}
        >
          Chi_Nhung_Shop
        </div>
        <div>
          <button className="button-shop-inter">
            <BsFillChatDotsFill />
            {" Chat"}
          </button>
          <button className="button-shop-inter">
            <AiFillShop />
            {" Xem shop"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopInter;
