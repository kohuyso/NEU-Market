import "./ReviewForm.css";
import Rating from "@mui/material/Rating";
import { GrClose } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";

function ReviewForm(status) {
  let RFstatus = status.props ? "e-wrapper-ReviewForm" : "wrapper-ReviewForm";
  const initialValue = {
    author: "",
    email: "",
    detailReview: "",
  };
  const [reviewFormValue, setReviewFormValue] = useState(initialValue);
  const [ratingPoint, setRatingPoint] = useState(5);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(reviewFormValue));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(reviewFormValue);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.author) {
      errors.author = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.detailReview) {
      errors.detailReview = "detail review is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewFormValue({ ...reviewFormValue, [name]: value });
    console.log(e.target.value);
    console.log(e.target.name);
  };

  return (
    <div className={RFstatus}>
      <div className="ReviewForm-closeIcon" onClick={status.statusFunction}>
        <GrClose />
      </div>
      <div className="ReviewForm-Header">Đánh giá sản phẩm</div>
      <div className="ReviewForm-ProductName">Sách lịch sử Đảng</div>
      <div className="ReviewForm-RattingStar">
        Đánh giá của bạn về sản phẩm:
        <div>
          <Rating
            name="simple-controlled"
            value={ratingPoint}
            onChange={(event, newValue) => {
              setRatingPoint(newValue);
              console.log(newValue);
            }}
            style={{ marginLeft: "1rem" }}
          />
        </div>
      </div>
      <p style={{ color: "red" }}>{formErrors.author}</p>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          id="ReviewForm-Author"
          name="author"
          value={reviewFormValue.author}
          placeholder="Nhập tên của bạn"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          id="ReviewForm-Author"
          name="email"
          value={reviewFormValue.email}
          placeholder="Nhập email của bạn"
          onChange={handleChange}
        ></input>
      </div>
      <p style={{ color: "red" }}>{formErrors.email}</p>

      <div>
        <input
          type="text"
          id="ReviewForm-Author"
          name="detailReview"
          value={reviewFormValue.detailReview}
          placeholder="Nhập nội dung đánh giá của của bạn"
          style={{ height: "11rem" }}
          onChange={handleChange}
        ></input>
      </div>
      <p style={{ color: "red" }}>{formErrors.detailReview}</p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            backgroundColor: "#0088ff",
            color: "white",
            marginTop: "0.9rem",
            cursor: "pointer",
            border: "none",
            padding: "0.5rem",
            width: "111px",
          }}
          onClick={handleSubmit}
        >
          Gửi đánh giá
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;
