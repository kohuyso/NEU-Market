import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Shop.css";
import ShopBody from "./ShopBody/ShopBody";

function Shop() {
  return (
    <>
      <Header />
      <div className="Product-wrapper">
        <div
          className="Body-gr"
          style={{ backgroundColor: "#f5f5f5", marginBottom: "10rem" }}
        >
          <ShopBody />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
