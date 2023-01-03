import { useEffect, useState } from "react";
import "./Review.css";
import ReviewComment from "./ReviewComment/ReViewComment";
import Rating from "@mui/material/Rating";
import ReviewForm from "./ReviewForm/ReviewForm";

let reviews = [
  {
    author: "Viet Thang dzai",
    point: 5,
    cmt: "Very good",
    date: "19/10/2022",
  },
  {
    author: "Nguoi duy nhat trong ban co ny",
    point: 4,
    cmt: "Medium",
    date: "20/10/2022",
  },
];

const calRate = () => {
  let sum = 0;
  reviews.forEach((e) => {
    sum += e.point;
  });
  return sum / reviews.length;
};

function Review(props) {
  let averageRate = calRate();
  useEffect(() => {
    averageRate = calRate();
  }, [reviews]);

  const [value, setValue] = useState(0);

  const newClass =
    props.props == "Detail-Title btnDetailTitle-active"
      ? " activeRV"
      : " unActiveRV";

  function changeUnActive() {
    setReviewFormActive(false);
    console.log("aaaaaaaaaaaaaaaaaaaaaaa");
  }
  const changeActive = () => {
    setReviewFormActive(true);
    console.log("OOOOOOOOOOOOOO");
  };
  const [reviewFormActive, setReviewFormActive] = useState(false);
  return (
    <div className={newClass}>
      <div
        className={"wrapper-shop"}
        style={{
          padding: "2rem 0",
          backgroundColor: "rgba(0,136,255,0.1)",
          height: "13rem",
          fontWeight: "400",
          border: "1px solid #c4cdd5",
        }}
      >
        <div style={{ padding: "0 3rem" }}>
          <div
            style={{
              color: "#0088ff",
              fontSize: "30px",
              marginBottom: "0.4rem",
            }}
          >
            {averageRate}/5
          </div>
          <div style={{ color: "#ffbe00", marginBottom: "0.4rem" }}>
            <Rating
              name="half-rating-read"
              defaultValue={averageRate}
              precision={0.5}
              readOnly
            />
          </div>
          <div> ({reviews.length} đánh giá)</div>
          <div>
            <button
              onClick={changeActive}
              style={{
                backgroundColor: "#0088ff",
                color: "white",
                marginTop: "0.9rem",
                cursor: "pointer",
                border: "none",
                padding: "0.5rem",
                width: "168px",
              }}
            >
              Gửi đánh giá của bạn
            </button>
            <ReviewForm
              props={reviewFormActive}
              statusFunction={changeUnActive}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <button className="reviewButton">Tất cả</button>
          <button className="reviewButton">5 điểm</button>
          <button className="reviewButton">4 điểm</button>
          <button className="reviewButton">3 điểm</button>
          <button className="reviewButton">2 điểm</button>
          <button className="reviewButton">1 điểm</button>
          <button className="reviewButton">Có hình ảnh</button>
        </div>
      </div>
      <div style={{ textAlign: "left" }}>
        <ReviewComment />
      </div>
    </div>
  );
}

export default Review;
