import Shop from "../../SellProduct/Body/ShopBanner/ShopBanner";
import Banner from "../Banner/Banner";
import ShopBody_SellingProduct from "./ShopBody-SellingProduct/ShopBody-SellingProduct";
import "./ShopBody.css";

function ShopBody() {
  return (
    <div className="Body-wrapper">
      <Shop />
      <Banner />
      <ShopBody_SellingProduct />
    </div>
  );
}

export default ShopBody;
