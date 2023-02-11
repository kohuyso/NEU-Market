import DetailProcduct from "./DetalProduct/DetailProduct";
import MainProduct from "./MainProduct/MainProduct";
import "./Body.css";
import ShopBanner from "./ShopBanner/ShopBanner";

function Body() {
  return (
    <div className="Body-wrapper">
      <MainProduct />
      <ShopBanner />
      <div className="Body-last">
        <DetailProcduct />
      </div>
    </div>
  );
}

export default Body;
