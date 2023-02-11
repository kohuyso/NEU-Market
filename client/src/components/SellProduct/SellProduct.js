import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Body from "./Body/Body";
import "./SellProduct.css";

export default function SellProduct() {
  return (
    <div className="Product-wrapper">
      <Header />
      <div className="Body-gr">
        <Body />
      </div>
      <Footer />
    </div>
  );
}
