import React, { useEffect, useState } from "react";
import "./Review.css";
import ReviewComment from "./ReviewComment/ReViewComment";
import Rating from "@mui/material/Rating";
import ReviewForm from "./ReviewForm/ReviewForm";
import { Modal } from "@mui/material";
import {
  point1,
  point2,
  point3,
  point4,
  point5,
  isImage,
  allReview,
} from "./ReviewComment/reviewCommentSlice";
import { useDispatch } from "react-redux";
import { listComments } from "./ReviewForm/ReviewForm";
const calRate = () => {
  let sum = 0;
  listComments.forEach((e) => {
    sum += e.point;
  });
  const rs = sum / listComments.length;
  return rs.toFixed(1);
};

function Review(props) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  let averageRate = calRate();
  useEffect(() => {
    averageRate = calRate();
  }, [listComments]);

  const newClass =
    props.props === "Detail-Title btnDetailTitle-active"
      ? " activeRV"
      : " unActiveRV";

  function changeUnActive() {
    setReviewFormActive(false);
    console.log("aaaaaaaaaaaaaaaaaaaaaaa");
  }
  const changeActive = () => {
    setReviewFormActive(true);
    console.log("OOOOOOOOOOOOOO");
    setOpen(true);
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
              value={averageRate}
              precision={0.5}
              readOnly
            />
          </div>
          <div> ({listComments.length} đánh giá)</div>
          <div style={{ position: "relative" }}>
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
            <Modal
              open={open}
              onClose={() => handleClose()}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ReviewForm
                props={reviewFormActive}
                setOpen={setOpen}
                statusFunction={changeUnActive}
              />
            </Modal>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <button
            className="reviewButton"
            onClick={() => dispatch(allReview())}
          >
            Tất cả
          </button>
          <button className="reviewButton" onClick={() => dispatch(point5())}>
            5 điểm
          </button>
          <button className="reviewButton" onClick={() => dispatch(point4())}>
            4 điểm
          </button>
          <button className="reviewButton" onClick={() => dispatch(point3())}>
            3 điểm
          </button>
          <button className="reviewButton" onClick={() => dispatch(point2())}>
            2 điểm
          </button>
          <button className="reviewButton" onClick={() => dispatch(point1())}>
            1 điểm
          </button>
          <button className="reviewButton" onClick={() => dispatch(isImage())}>
            Có hình ảnh
          </button>
        </div>
      </div>
      <div style={{ textAlign: "left" }}>
        <ReviewComment />
      </div>
    </div>
  );
}

export default Review;
