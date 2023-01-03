import React from "react";
import IconDiscount1 from "../../assets/icon/IconDiscount1";
import IconDiscount2 from "../../assets/icon/IconDiscount2";
import IconDiscount3 from "../../assets/icon/IconDiscount3";
import IconDiscount4 from "../../assets/icon/IconDiscount4";

const Discount = () => {
  return (
    <div className="home_discount">
      <div className="home_discount_item">
        <IconDiscount1 />
        <div className="home_discount_item_text">
          <h3>Miễn phí ship</h3>
          <p>Đối với đơn hàng từ 25k</p>
        </div>
      </div>

      <div className="home_discount_item">
        <IconDiscount2 />
        <div className="home_discount_item_text">
          <h3>Miễn phí ship</h3>
          <p>Đối với đơn hàng từ 25k</p>
        </div>
      </div>

      <div className="home_discount_item">
        <IconDiscount3 />
        <div className="home_discount_item_text">
          <h3>Miễn phí ship</h3>
          <p>Đối với đơn hàng từ 25k</p>
        </div>
      </div>

      <div className="home_discount_item">
        <IconDiscount4 />

        <div className="home_discount_item_text">
          <h3>Miễn phí ship</h3>
          <p>Đối với đơn hàng từ 25k</p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
