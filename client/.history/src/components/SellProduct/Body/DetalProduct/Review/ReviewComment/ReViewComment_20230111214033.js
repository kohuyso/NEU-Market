import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
import { selectReviewa } from "./reviewCommentSlice";
import { listComments } from "../ReviewForm/ReviewForm";

function ReviewComment() {
  console.log(listComments);
  const selectReview = useSelector(selectReviewa);
  console.log(selectReviewa);
  return (
    <div
      style={{
        padding: "2rem 3rem",
        border: "1px solid #c4cdd5",
        paddingBottom: "3rem",
      }}
    >
      <Comment.Group>
        {listComments
          .filter((review) =>
            selectReview == 0 ? true : review.point == selectReview
          )
          .map((rattingComment) => (
            <div
              style={{ marginBottom: "2.5rem" }}
              key={rattingComment.commentId}
            >
              <Comment>
                <Comment.Avatar src={rattingComment.avatar} />
                <Comment.Content>
                  <Comment.Author as="a">
                    {rattingComment.author}
                  </Comment.Author>
                  <Comment.Metadata>
                    <div>{rattingComment.time}</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <Rating
                      name="half-rating-read"
                      defaultValue={rattingComment.point}
                      precision={0.5}
                      readOnly
                    />
                  </Comment.Text>
                  <div style={{ marginTop: "-10px" }}>
                    <Comment.Text>
                      <p>{rattingComment.cmt}</p>
                    </Comment.Text>
                  </div>
                </Comment.Content>
              </Comment>
            </div>
          ))}
      </Comment.Group>
    </div>
  );
}

export default ReviewComment;
