import "./ReviewForm.css";
import Rating from "@mui/material/Rating";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";

let rattingComments = [
  {
    commentId: 1,
    author: "Viet Thang dzai",
    point: 5,
    cmt: "Very good",
    time: "19/10/2022",
    replyComments: [],
    avatar:
      "https://gateway.pinata.cloud/ipfs/QmTXxYsDgHS2xJ48xqkeKeFjqVGiPAU49254hx5kvn3JbQ/VietThang.jpg",
    s: "https://www.facebook.com/NITC.NEU/photos/pb.100064956511449.-2207520000./561882482378453/?type=3",
  },
  {
    commentId: 2,
    author: "Viet Thang hoi dzai",
    point: 4,
    cmt: "good",
    time: "29/10/2022",
    avatar:
      "https://gateway.pinata.cloud/ipfs/QmTXxYsDgHS2xJ48xqkeKeFjqVGiPAU49254hx5kvn3JbQ/VietThang.jpg",
    s: "https://www.facebook.com/NITC.NEU/photos/pb.100064956511449.-2207520000./561882482378453/?type=3",
    replyComments: [
      {
        commentId: 3,
        author: "Viet Thang dzai",
        point: 5,
        cmt: "5 sao di b ei",
        time: "29/10/2022",
        avatar:
          "https://gateway.pinata.cloud/ipfs/QmTXxYsDgHS2xJ48xqkeKeFjqVGiPAU49254hx5kvn3JbQ/VietThang.jpg",
        s: "https://www.facebook.com/NITC.NEU/photos/pb.100064956511449.-2207520000./561882482378453/?type=3",
      },
    ],
  },
];

let idNum = 3;

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
    console.log("sss");
    status.setOpen(false);
    setFormErrors(validate(reviewFormValue));

    const dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    rattingComments.push({
      commentId: idNum,
      author: reviewFormValue.author,
      point: ratingPoint,
      cmt: reviewFormValue.detailReview,
      time: day + "/" + month + "/" + year,
      avatar:
        "https://gateway.pinata.cloud/ipfs/QmTXxYsDgHS2xJ48xqkeKeFjqVGiPAU49254hx5kvn3JbQ/VietThang.jpg",
      s: "https://www.facebook.com/NITC.NEU/photos/pb.100064956511449.-2207520000./561882482378453/?type=3",
    });

    idNum += 1;
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(rattingComments);
  }, [rattingComments]);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      status.statusFunction();
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
    <div style={{ position: "relative" }}>
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
    </div>
  );
}

export default ReviewForm;
export const listComments = rattingComments;
