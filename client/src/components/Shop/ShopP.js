import "./Shop.css";
import ShopBody from "./ShopBody/ShopBody";

function ShopM() {
  return (
    <div className="Product-wrapper">
      <h1 style={{ backgroundColor: "blue" }}> Header </h1>
      <div className="Body-gr" style={{ backgroundColor: "#f5f5f5" }}>
        <ShopBody />
      </div>
    </div>
  );
}

export default ShopM;
