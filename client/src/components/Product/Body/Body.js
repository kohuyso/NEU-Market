import DetailProcduct from "./DetalProduct/DetailProduct";
import MainProduct from "./MainProduct/MainProduct";
import Shop from "./Shop/Shop";
import "./Body.css";
import MoreProduct from "./MoreProduct/MoreProduct";

function Body() {
  return (
    <div className="Body-wrapper">
      <MainProduct />
      <Shop />
      <div className="Body-last">
        <DetailProcduct />
      </div>
    </div>
  );
}

export default Body;
