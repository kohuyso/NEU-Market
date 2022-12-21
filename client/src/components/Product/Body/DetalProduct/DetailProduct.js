import { useEffect, useState } from "react";
import "./DetailProduct.css";
import Review from "./Review/Review";

const details = [
  {
    info: "Tên sách",
    dt: "sss",
    describe:
      "THÔNG TIN SẢN PHẨM: \n - Xuất sứ: Việt Nam \n - Chất liệu: 35% Cotton, 60% Polyester, 5% Spandex \n- Dày dặn, mềm mịn, co giãn 4 chiều, không xù, không nhăn, không hút bụi bẩn. \n- Size áo: FREESIZE form rộng chuẩn TAY LỠ UNISEX cực đẹp. \n- Chiều dài áo: 72cm \n- Chiều rộng áo: 55cm \n- Chiều dài tay áo: 20cm \n- Từ 50-65KG (mặc rộng thoải mái) \n- Từ 66-75KG (mặc rộng vừa). \n- Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
  },
  {
    info: "Loại",
    dt: "sss",
  },
  {
    info: "Môn",
    dt: "sss",
  },
  {
    info: "Số trang",
    dt: "sss",
  },
  {
    info: "Xuất bản",
    dt: "sss",
  },
  {
    info: "Nhà xuất bản",
    dt: "sss",
  },
];

function DetailProcduct() {
  const [choose, setChoose] = useState([
    "Detail-Title btnDetailTitle-active",
    "Detail-Title",
    "Detail-Title",
  ]);
  useEffect(() => {
    console.log("AAA");
  }, choose);

  const handleChooseD = (e1, e2, e3) => {
    console.log(e2);
    setChoose([e1, e2, e3]);
  };

  const addClass0 = choose[0] == "Detail-Title" ? "unActiveDT" : "activeDT";

  return (
    <div className="wrapper-Detail-Product">
      <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
        <div className="title_description">
          <div
            className={choose[0]}
            onClick={() =>
              handleChooseD(
                "Detail-Title btnDetailTitle-active",
                "Detail-Title",
                "Detail-Title"
              )
            }
          >
            Mô tả sản phẩm
          </div>
          <div
            className={choose[1]}
            onClick={() =>
              handleChooseD(
                "Detail-Title",
                "Detail-Title btnDetailTitle-active",
                "Detail-Title"
              )
            }
          >
            Hỏi đáp
          </div>
          <div
            className={choose[2]}
            onClick={() =>
              handleChooseD(
                "Detail-Title",
                "Detail-Title",
                "Detail-Title btnDetailTitle-active"
              )
            }
          >
            Đánh giá
          </div>
        </div>
        <Review props={choose[2]} />
        <div className={"Detail-describe" + addClass0}>
          {details[0].describe}
        </div>
      </div>
    </div>
  );
}

export default DetailProcduct;
