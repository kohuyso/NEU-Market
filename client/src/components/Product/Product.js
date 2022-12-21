import React from "react";
import Body from "./Body/Body";
import "./Product.css";



export default function Product() {
  return (
    <div className="Product-wrapper">
      <h1 style={{ backgroundColor: "blue" }}> Header </h1>
      <div className="Body-gr">
        <Body></Body>
      </div>
    </div>
  );
}
