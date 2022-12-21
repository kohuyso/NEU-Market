import ImageProduct from "./ImageProduct/ImageProduct";
import MainInfor from "./MainInfor/MainInfor";
import "./MainProduct.css";

function MainProduct() {
  return (
    <div className="wrapper-Main-Product">
      <ImageProduct />
      <MainInfor />
    </div>
  );
}

export default MainProduct;
